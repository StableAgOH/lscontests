import axios from "axios";
import { contest, rule } from "../contest";
import { oj } from ".";

type result = {
    ruleType: number;
    visibilityType: number;
    invitationCodeType: number;
    rated: boolean;
    host: { id: number, name: string, isPremium: boolean; };
    problemCount: number;
    id: number;
    name: string;
    startTime: number;
    endTime: number;
};

const ruleRecord: Record<number, rule> = {
    1: "OI",
    2: "ICPC",
    3: "LeDuo",
    4: "IOI",
    5: "Codeforces"
};

const headers = {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36",
    "x-luogu-type": "content-only"
};

export const lg: oj = {
    name: "Luogu",
    async get()
    {
        const resList: result[] = (await axios.get("https://www.luogu.com.cn/contest/list", { headers })).data.currentData.contests.result;
        return resList.map((res): contest =>
        {
            return {
                ojName: lg.name,
                name: res.name,
                rule: ruleRecord[res.ruleType],
                startTime: new Date(res.startTime * 1000),
                endTime: new Date(res.endTime * 1000),
                url: `https://www.luogu.com.cn/contest/${res.id}`
            };
        }).filter(contest => contest.endTime >= new Date());
    }
};
