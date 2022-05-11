import { readdirSync } from "fs";
import { alloj } from "./lib/oj";

export type config = {
    abbrList?: string[],
    days?: number,
    sort?: boolean
}

const defaultConfig = {
    abbrList: Object.keys(alloj),
    days: 3,
    sort: true
};

export async function getContestList(config?: config) {
    const cfg = { ...defaultConfig, ...config };
    if (!cfg.abbrList) cfg.abbrList = Object.keys(alloj);
    const contests = (await Promise.all(
        cfg.abbrList.map(
            async (abbr) => {
                try {
                    const cts = await alloj[abbr].get();
                    return cts.filter((c) => c.startTime <= new Date(Date.now() + cfg.days * 86400000));
                }
                catch (e) {
                    console.error(`Failed to get match information for ${alloj[abbr].name}, details:`);
                    console.error(e);
                    return [];
                }
            }
        )
    )).reduce((ls1, ls2) => ls1.concat(ls2));
    if (cfg.sort) contests.sort((a, b) => a.startTime.getTime() - b.startTime.getTime());
    return contests;
}

export const langList = readdirSync(`${__dirname}/locale`).map((fileName) => fileName.replace(".json", ""));

type langDict = {
    welcome: string,
    ojName: string,
    name: string,
    rule: string,
    startTime: string,
    endTime: string
}

function format(s: string, ...args: string[]) {
    for (let i = 0; i < args.length; i++)
        s = s.replace(`{${i}}`, args[i]);
    return s;
}

export async function getContestInfo(config?: config, language = "zh-CN") {
    if (!langList.includes(language)) throw new Error(`Illegal language ${language}, the allowed languages are ${langList}`);
    const cfg = { ...defaultConfig, ...config };
    const contests = await getContestList(cfg);
    const info: string[] = [];
    const lang: langDict = await import(`./locale/${language}.json`);
    info.push(format(lang.welcome, cfg.days.toString(), contests.length.toString()));
    for (const contest of contests) {
        const ct: string[] = [];
        ct.push(`${lang.ojName}: ${contest.ojName}`);
        ct.push(`${lang.name}: ${contest.name}`);
        ct.push(`${lang.rule}: ${contest.rule}`);
        ct.push(`${lang.startTime}: ${contest.startTime.toLocaleString()}`);
        ct.push(`${lang.endTime}: ${contest.endTime.toLocaleString()}`);
        ct.push(contest.url);
        info.push(ct.join("\n"));
    }
    return info.join("\n\n");
}

export { cli } from "./cli";
export { addOJ } from "./lib/oj";
