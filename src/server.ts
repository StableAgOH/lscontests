#!/usr/bin/env node
import express from "express";
import Lscontests, { Contest } from ".";
import { alloj } from "./lib/oj";
import { getLangDict } from "./locale";
import { convertTimestampToArray, createEvents, EventAttributes } from "ics";
import pangu from "pangu";
import { randomUUID } from "crypto";
import { Command } from "commander";
import { bin, version } from "../package.json";
import { readFileSync } from "fs";
import AwaitLock from "await-lock";

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

const web = readFileSync(`${__dirname}/server.html`).toString();

app.set("trust proxy", true);
app.use(logger());

app.get("/", (req, res) =>
{
    res.set("Content-Type", "text/html");
    res.send(web);
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
    contests: Contest[],
    lastUpdate: number;
} = {
    contests: [],
    lastUpdate: 0
};

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
    assertType<string>(value);
    return icsPostProcess(value);
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
