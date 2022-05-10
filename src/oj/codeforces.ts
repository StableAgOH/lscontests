import axios from "axios";
import { contest, rule } from "../contest";
import { oj } from "../oj";

type result = {
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
    CF: "Codeforces",
    ICPC: "ICPC"
};

export const cf: oj = {
    name: "Codeforces",
    get: async () => {
        const resList: result[] = (await axios.get("https://codeforces.com/api/contest.list")).data.result;
        return resList.map((res): contest => {
            return {
                ojName: cf.name,
                name: res.name,
                rule: ruleRecord[res.type],
                startTime: new Date(res.startTimeSeconds * 1000),
                endTime: new Date((res.startTimeSeconds + res.durationSeconds) * 1000),
                url: `https://codeforces.com/contests/${res.id}`
            };
        }).filter((contest) => contest.startTime >= new Date());
    }
};
