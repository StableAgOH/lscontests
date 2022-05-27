import axios from "axios";
import { load } from "cheerio";
import { Contest, rule } from "../contest";
import { OJ } from ".";

type result = {
    id: string;
    name: string;
    type: string;
    phase: string;
    frozen: boolean;
    durationSeconds: number;
    startTimeSeconds: number;
    relativeTimeSeconds: number;
};

const ruleRecord: Record<string, rule> = {
    CF: "Codeforces",
    ICPC: "ICPC"
};

export const cf: OJ = {
    name: "Codeforces",
    async get()
    {
        const response = await axios.get("https://codeforces.com/api/contest.list");
        if(!(response.data instanceof Object))
        {
            const $ = load(response.data);
            throw new Error($.text());
        }
        const resList: result[] = response.data.result;
        return resList.map((res): Contest =>
        {
            return {
                ojName: cf.name,
                name: res.name,
                rule: ruleRecord[res.type],
                startTime: new Date(res.startTimeSeconds * 1000),
                endTime: new Date((res.startTimeSeconds + res.durationSeconds) * 1000),
                url: `https://codeforces.com/contests/${res.id}`
            };
        }).filter(contest => contest.endTime >= new Date());
    }
};
