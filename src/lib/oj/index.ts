import axios from "axios";
import axiosRetry from "axios-retry";
import { Contest } from "../contest";
import { at } from "./atcoder";
import { cf } from "./codeforces";
import { lc } from "./leetcode";
import { lg } from "./luogu";
import { nc } from "./nowcoder";

axiosRetry(axios, { retries: 3, retryDelay: () => 1000 });

/**
 * name: OJ name
 *
 * get: return a Promise that contains an array of all contests with end times after the current time
 */
export interface OJ
{
    name: string,
    get(): Promise<Contest[]>;
}

export const alloj: { [abbr: string]: OJ; } = {
    at,
    cf,
    lc,
    lg,
    nc,
};

/**
 * Add an OJ to get information about the contests held on it
 * @param abbr Abbreviation of the OJ to be added
 * @param oj OJ to be added
 */
export function addOJ(abbr: string, oj: OJ)
{
    alloj[abbr] = oj;
}
