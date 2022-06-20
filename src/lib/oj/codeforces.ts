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

function mergeDuplicate(data: Contest[]): Contest[]
{
    const testRe = /Codeforces Round #(\d{2,4}) \(Div. (\d)\)/;
    const tmpMap: Map<number, [number, Contest][]> = new Map();
    const rets: Contest[] = [];
    data.forEach((item) =>
    {
        if(testRe.test(item.name))
        {
            const group = item.name.match(testRe)?.groups;
            if(group !== undefined)
            {
                const round = parseInt(group[1]);
                const div = parseInt(group[2]);

                const i = tmpMap.get(round);
                if(i !== undefined)
                {
                    i.push([div, item]);
                }
                else
                {
                    tmpMap.set(round, [[div, item]]);
                }
            }
        }
        else
        {
            rets.push(item);
        }
    });
    tmpMap.forEach((v, k) =>
    {
        if(v.length === 1)
        {
            rets.push(v[0][1]);
        }
        else
        {
            const divs = v.map(([div]) => div).sort().join("/");
            const urls = v.map(([, item]) => item.url).join("\n");
            const item: Contest = {
                name: `Codeforces Round #${k} (Div. ${divs})`,
                ojName: cf.name,
                rule: ruleRecord.CF,
                startTime: v[0][1].startTime,
                endTime: v[0][1].endTime,
                url: urls
            };
            rets.push(item);
        }
    });

    return rets;
}

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
        const ret = resList.map((res): Contest =>
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
        return mergeDuplicate(ret);
    }
};
