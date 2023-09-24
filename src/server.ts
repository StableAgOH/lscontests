import express from "express";
import Lscontests, { Contest } from ".";
import { alloj } from "./lib/oj";
import { getLangDict } from "./locale";
import { convertTimestampToArray, createEvents, EventAttributes } from "ics";
import pangu from "pangu";
import { randomUUID } from "crypto";
import AwaitLock from "await-lock";
import Redis from "ioredis";

const app = express();

const logger = () =>
{
    return (req: express.Request, res: express.Response, next: express.NextFunction) =>
    {
        const start = process.hrtime();
        res.on("finish", () =>
        {
            const diff = process.hrtime(start);
            const ms = diff[0] * 1e3 + diff[1] * 1e-6;

            const divider = " | ";
            const log = ` ${res.statusCode}` + divider +
                `${(ms.toFixed(3) + "ms").padStart(13)}` + divider +
                `${req.ip.padStart(15)}` + divider +
                `${req.method.padEnd(7)}` +
                `"${req.originalUrl}"`;
            console.log(log);
        });
        next();
    };
};

app.set("trust proxy", true);
app.use(logger());

app.get("/ics", async (req, res) =>
{
    const { language, l, ojs, o } = req.query;
    const lArg = language || l || "zh-CN";
    let oArg = ojs || o;

    if(lArg instanceof Array)
    {
        res.status(400).send("Multiple languages not supported");
        return;
    }
    if(typeof oArg === "string")
    {
        if(oArg.includes(",")) oArg = oArg.split(",");
        else oArg = [oArg];
    }
    else if(!oArg) oArg = Object.keys(alloj);

    const data = await getIcs(lArg as unknown as string, oArg as unknown as string[]);
    res.setHeader("Content-Type", "text/calendar");
    res.send(data);
});

const contestsCache: {
    contests: Contest[],
    lastUpdate: number;
} = {
    contests: [],
    lastUpdate: 0
};

let redis: Redis = undefined as unknown as Redis;

const cacheKey = "lsct:cache";

async function exportContestCache()
{
    await redis.set(cacheKey, JSON.stringify(contestsCache));
}

async function importContestCache()
{
    redis = new Redis(process.env.REDIS_URL as string);
    const payload = await redis.get(cacheKey);
    if(payload)
    {
        const obj = JSON.parse(payload);
        contestsCache.lastUpdate = obj.lastUpdate;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        contestsCache.contests = obj.contests.map((c: any) =>
        {
            c.startTime = new Date(c.startTime);
            c.endTime = new Date(c.endTime);
            return c;
        });
    }
}

const lock = new AwaitLock();

function icsPostProcess(value: string)
{
    return value
        .replace("X-PUBLISHED-TTL:PT1H", "X-PUBLISHED-TTL:PT1H\r\nREFRESH-INTERVAL:PT1H")
        .replace("X-WR-CALNAME:算法竞赛",
            "X-WR-CALNAME:算法竞赛\r\n" +
            "X-WR-TIMEZONE:Asia/Shanghai\r\n" +
            "BEGIN:VTIMEZONE\r\n" +
            "TZID:Asia/Shanghai\r\n" +
            "X-LIC-LOCATION:Asia/Shanghai\r\n" +
            "BEGIN:STANDARD\r\n" +
            "TZOFFSETFROM:+0800\r\n" +
            "TZOFFSETTO:+0800\r\n" +
            "TZNAME:CST\r\n" +
            "DTSTART:19700101T000000\r\n" +
            "END:STANDARD\r\n" +
            "END:VTIMEZONE"
        );
}

async function checkCache()
{
    await lock.acquireAsync();
    if(process.env.VERCEL)
    {
        await importContestCache();
    }
    try
    {
        if(contestsCache.lastUpdate < Date.now() - 1000 * 60 * 5)
        {
            const c = await new Lscontests({ days: -1 }).getContests();
            contestsCache.contests = c.running.concat(...c.upcoming);
            contestsCache.contests = contestsCache.contests.filter(
                c => c.endTime.getTime() - c.startTime.getTime() < 1000 * 60 * 60 * 24 * 2
            ); // ignore too long contests
            contestsCache.lastUpdate = Date.now();
            if(process.env.VERCEL)
            {
                await exportContestCache();
            }
        }
    }
    finally
    {
        lock.release();
    }
}

async function getIcs(lang: string, ojs: string[])
{
    await checkCache();

    const contests = contestsCache.contests.filter(c => ojs.some(oj => c.ojName === alloj[oj].name));
    const langDict = await getLangDict(lang);

    const events = contests.map((c) =>
    {
        const ls: string[] = [];
        ls.push(`${langDict.ojName}: ${c.ojName}`);
        ls.push(`${langDict.name}: ${c.name}`);
        ls.push(`${langDict.rule}: ${c.rule}`);
        ls.push(c.url);
        const description = pangu.spacing(ls.join("\n"));
        const ret: EventAttributes = {
            start: convertTimestampToArray(c.startTime.getTime(), "local"),
            startOutputType: "local",
            end: convertTimestampToArray(c.endTime.getTime(), "local"),
            endOutputType: "local",
            calName: "算法竞赛",
            productId: "-//StableAgOH//LSCT//CN",
            title: c.name,
            location: c.ojName,
            categories: [c.rule],
            uid: `${randomUUID()}@LSCT`,
            description,
        };
        return ret;
    });
    const { value, error } = createEvents(events);
    if(error) throw error;
    if(!value) throw new Error("No valid ics string.");
    return icsPostProcess(value);
}

export = app;
