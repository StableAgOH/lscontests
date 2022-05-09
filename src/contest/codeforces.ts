import axios from "axios";
import { Contest, contestRule } from "./contest";

type CodeforcesResult = {
    id: string;
    name: string;
    type: string;
    phase: string;
    frozen: boolean;
    durationSeconds: number;
    startTimeSeconds: number;
    relativeTimeSeconds: number;
}

const ruleRecord: Record<string, contestRule> = {
    "CF": "Codeforces",
    "ICPC": "ICPC"
};

export default async function get() {
    const result: CodeforcesResult[] = (await axios.get("https://codeforces.com/api/contest.list")).data.result;
    return result.map((contest): Contest => {
        return {
            oj: "Codeforces",
            name: contest.name,
            rule: ruleRecord[contest.type],
            startTime: new Date(contest.startTimeSeconds * 1000),
            endTime: new Date((contest.startTimeSeconds + contest.durationSeconds) * 1000),
            url: `https://codeforces.com/contests/${contest.id}`
        };
    }).filter((contest) => contest.startTime >= new Date());
}
