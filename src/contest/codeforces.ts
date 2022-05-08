import axios from "axios";
import { Contest } from "./contest";

interface CodeforcesResult {
    id: string;
    name: string;
    type: string;
    phase: string;
    frozen: boolean;
    durationSeconds: number;
    startTimeSeconds: number;
    relativeTimeSeconds: number;
}

export default async function get() {
    const result: CodeforcesResult[] = (await axios.get("https://codeforces.com/api/contest.list")).data.result;
    return result.map((contest): Contest => {
        return {
            oj: "Codeforces",
            name: contest.name,
            rule: contest.type,
            startTime: new Date(contest.startTimeSeconds * 1000),
            durationHours: contest.durationSeconds / 60 / 60,
            url: `https://codeforces.com/contests/${contest.id}`
        };
    }).filter((contest) => contest.startTime >= new Date());
}
