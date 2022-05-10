import { contest } from "./contest";
import { cf } from "./oj/codeforces";
import { lg } from "./oj/luogu";
import { nc } from "./oj/nowcoder";

export type oj = {
    name: string,
    get: () => Promise<contest[]>
}

export const alloj: { [abbr: string]: oj } = {
    cf,
    lg,
    nc
};

export function addOJ(abbr: string, oj: oj) {
    alloj[abbr] = oj;
}
