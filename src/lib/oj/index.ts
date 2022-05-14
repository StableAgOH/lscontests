import { contest } from "../contest";
import { at } from "./atcoder";
import { cf } from "./codeforces";
import { lc } from "./leetcode";
import { lg } from "./luogu";
import { nc } from "./nowcoder";

export type oj = {
    name: string,
    get: () => Promise<contest[]>;
};

export const alloj: { [abbr: string]: oj; } = {
    at,
    cf,
    lc,
    lg,
    nc,
};

export function addOJ(abbr: string, oj: oj)
{
    alloj[abbr] = oj;
}
