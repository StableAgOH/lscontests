import axios from "axios";
import { contest, rule } from "../contest";
import { oj } from "../oj";

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

const ruleRecord: Record<string, rule> = {
    "CF": "Codeforces",
    "ICPC": "ICPC"
};

export const cf: oj = {
    name: "Codeforces",
    get: async () => {
        const result: CodeforcesResult[] = (await axios.get("https://codeforces.com/api/contest.list")).data.result;
        return result.map((contest): contest => {
            return {
                ojName: cf.name,
                name: contest.name,
                rule: ruleRecord[contest.type],
                startTime: new Date(contest.startTimeSeconds * 1000),
                endTime: new Date((contest.startTimeSeconds + contest.durationSeconds) * 1000),
                url: `https://codeforces.com/contests/${contest.id}`
            };
        }).filter((contest) => contest.startTime >= new Date());
    }
};
