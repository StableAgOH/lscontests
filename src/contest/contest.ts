import codeforces from "./codeforces";
import luogu from "./luogu";

export type oj = "cf" | "lg";
type ojName = "Codeforces" | "Luogu";
type ojDetail = {
    name: ojName,
    getter: () => Promise<Contest[]>
}
type ojRecord = Record<oj, ojDetail>
export type contestRule = "OI" | "IOI" | "ICPC" | "LeDuo" | "Codeforces"

export type Contest = {
    oj: ojName;
    name: string;
    rule: contestRule;
    startTime: Date;
    durationHours: number;
    url: string;
}

export const alloj: ojRecord = {
    "cf": { name: "Codeforces", getter: codeforces },
    "lg": { name: "Luogu", getter: luogu }
};

export function getGetterList(ojs: oj[]) {
    if (!ojs) ojs = Object.keys(alloj) as oj[];
    return ojs.map((oj) => alloj[oj].getter);
}
