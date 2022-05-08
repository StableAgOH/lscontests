import codeforces from "./codeforces";

export interface Contest {
    oj: string;
    name: string;
    rule: string;
    startTime: Date;
    durationHours: number;
    url: string;
}

export type oj = "cf";

export const alloj: oj[] = ["cf"];

export const getters: Record<oj, () => Promise<Contest[]>> = {
    "cf": codeforces,
};

export function getGetterList(ojs: oj[]) {
    if (!ojs) ojs = alloj;
    return ojs.map((oj) => getters[oj]);
}
