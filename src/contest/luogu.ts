import axios from "axios";
import { Contest, contestRule } from "./contest";

type LuoguResult = {
    ruleType: number;
    visibilityType: number;
    invitationCodeType: number;
    rated: boolean;
    host: { id: number, name: string, isPremium: boolean };
    problemCount: number;
    id: number;
    name: string;
    startTime: number;
    endTime: number;
}

const ruleRecord: Record<number, contestRule> = {
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

export default async function get() {
    const result: LuoguResult[] = (await axios.get("https://www.luogu.com.cn/contest/list", { headers })).data.currentData.contests.result;
    return result.map((contest): Contest => {
        return {
            oj: "Luogu",
            name: contest.name,
            rule: ruleRecord[contest.ruleType],
            startTime: new Date(contest.startTime * 1000),
            durationHours: (contest.endTime - contest.startTime) / 60 / 60,
            url: `https://www.luogu.com.cn/contest/${contest.id}`
        };
    }).filter((contest) => contest.startTime >= new Date());
}
