import express from "express";
import { contest, getContests } from "./index";
import { alloj } from "./lib/oj";
import { getLangDict } from "./locale";
import { convertTimestampToArray, createEvents, EventAttributes } from "ics";
import pangu from "pangu";
import { randomUUID } from "crypto";
import { Command } from "commander";
import { bin, version } from "../package.json";
import _ from "lodash";

const app = express();

function assertType<T>(obj: unknown): asserts obj is T
// eslint-disable-next-line @typescript-eslint/no-empty-function
{
}

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

app.get("/", (req, res) =>
{
    res.redirect("https://github.com/StableAgOH/lscontests");
});

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
    assertType<string[]>(oArg);
    assertType<string>(lArg);

    const data = await getIcs(lArg, oArg);
    res.setHeader("Content-Type", "text/calendar");
    res.send(data);
});

const contestsCache: {
    contests: contest[],
    lastUpdate: number;
} = {
    contests: [],
    lastUpdate: 0
};

async function getIcs(lang: string, ojs: string[])
{
    if(contestsCache.lastUpdate < Date.now() - 1000 * 60 * 5)
    {
        const c = await getContests({ days: -1 });
        contestsCache.contests = _.uniqBy(contestsCache.contests.concat(c.running.concat(c.upcoming)), JSON.stringify);
        contestsCache.contests = contestsCache.contests.filter(
            c => c.endTime.getTime() - c.startTime.getTime() < 1000 * 60 * 60 * 24 * 2
        ); // ignore too long contests
        contestsCache.lastUpdate = Date.now();
    }

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
            end: convertTimestampToArray(c.endTime.getTime(), "local"),
            calName: "算法竞赛",
            productId: "-//StableAgOH//LSCT//CN",
            title: c.name,
            url: c.url,
            location: c.ojName,
            categories: [c.rule],
            uid: `${randomUUID()}@LSCT`,
            description,
        };
        return ret;
    });
    const { value, error } = createEvents(events);
    if(error) throw error;
    assertType<string>(value);
    value.replace("X-PUBLISHED-TTL:PT1H\r\n", "X-PUBLISHED-TTL:PT1H\r\nREFRESH-INTERVAL:PT1H\r\n");
    return value;
}

const command = new Command()
    .name(Object.keys(bin)[1])
    .version(version)
    .option("-h, --host, <host>", "Host to listen on", "0.0.0.0")
    .option("-p, --port, <port>", "Port to listen on", "8080");
command.parse();

const host = command.opts().host as string;
let port: number | string = command.opts().port as string;
port = parseInt(port, 10);
app.listen(port, host, () =>
{
    const logURL = `http://${host === "0.0.0.0" ? "127.0.0.1" : host}:${port}/`;
    console.log(`LSCT server v${version} listening on ${logURL}`);
});
