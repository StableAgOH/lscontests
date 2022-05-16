/**
 * LeDuo: From Luogu OJ
 */
export type rule = "OI" | "IOI" | "ICPC" | "LeDuo" | "Codeforces" | "AtCoder";

export type contest = {
    ojName: string;
    name: string;
    rule: rule;
    startTime: Date;
    endTime: Date;
    url: string;
};
