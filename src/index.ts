import { alloj } from "./lib/oj";
import { getLangDict } from "./locale";
import { contest } from "./lib/contest";
import _ from "lodash";
import pangu from "pangu";

export type config = {
    abbrList?: string[],
    days?: number,
    sort?: boolean;
};

const defaultConfig = {
    abbrList: Object.keys(alloj),
    days: 3,
    sort: true
};

function resolveConfig(config?: config)
{
    const cfg = { ...defaultConfig, ...config };
    if(cfg.abbrList.length == 0) cfg.abbrList = defaultConfig.abbrList;
    return cfg;
}

export async function getContests(config?: config)
{
    const cfg = resolveConfig(config);
    async function ls(fn: (v: contest) => boolean)
    {
        return (await Promise.all(
            cfg.abbrList.map(
                async abbr =>
                {
                    try { return (await alloj[abbr].get()).filter(fn); }
                    catch(e)
                    {
                        console.error(`Failed to get match information for ${alloj[abbr].name}, details:`);
                        console.error(e);
                        return [];
                    }
                }
            )
        )).reduce((ls1, ls2) => ls1.concat(ls2));
    }
    const ret = {
        running: await ls(ct => ct.startTime <= new Date() && ct.endTime > new Date()),
        upcoming: await ls(ct => ct.startTime > new Date() && ct.startTime <= new Date(Date.now() + cfg.days * 86400000))
    };
    if(cfg.sort) Object.values(ret).forEach(ct => ct.sort((a, b) => a.startTime.getTime() - b.startTime.getTime()));
    return ret;
}

export async function getContestsInfoText(config?: config, language = "zh-CN")
{
    const cfg = resolveConfig(config);
    const lang = await getLangDict(language);
    const { running, upcoming } = await getContests(cfg);
    const info: string[] = [];
    const oj = cfg.abbrList.map(abbr => alloj[abbr].name).join(",");

    function msg(contests: contest[])
    {
        return contests.map(contest =>
        {
            const ls: string[] = [];
            ls.push(`${lang.ojName}: ${contest.ojName}`);
            ls.push(`${lang.name}: ${contest.name}`);
            ls.push(`${lang.rule}: ${contest.rule}`);
            ls.push(`${lang.startTime}: ${contest.startTime.toLocaleString(undefined, { hourCycle: "h23" })}`);
            ls.push(`${lang.endTime}: ${contest.endTime.toLocaleString(undefined, { hourCycle: "h23" })}`);
            ls.push(contest.url);
            return ls.join("\n");
        });
    }

    if(running.length)
    {
        info.push(_.template(lang.runnning)({
            contestCount: running.length,
            oj
        }));
        info.push(...msg(running));
    }
    else info.push(_.template(lang.norunning)({ oj }));
    if(upcoming.length)
    {
        info.push(_.template(lang.upcoming)({
            contestCount: upcoming.length,
            days: cfg.days,
            oj
        }));
        info.push(...msg(upcoming));
    }
    else info.push(_.template(lang.noupcoming)({ days: cfg.days, oj }));

    return pangu.spacing(info.join("\n\n"));
}

export { cli } from "./cli";
export { addOJ } from "./lib/oj";
