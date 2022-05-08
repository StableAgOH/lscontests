import codeforces from "./codeforces";

export interface Contest {
    oj: string;
    name: string;
    rule: string;
    startTime: Date;
    durationHours: number;
    url: string;
}

export const getters: Record<string, () => Promise<Contest[]>> = {
    "codeforces": codeforces,
};
