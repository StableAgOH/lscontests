import { contest } from "./contest";
import { cf } from "./oj/codeforces";
import { lg } from "./oj/luogu";

export type oj = {
    name: string,
    get: () => Promise<contest[]>
}

export const alloj: { [abbr: string]: oj } = {
    cf,
    lg
};

export function addOJ(abbr: string, oj: oj) {
    alloj[abbr] = oj;
}
