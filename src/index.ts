import { alloj } from "./lib/oj";
import { getLangDict } from "./locale";
import { contest } from "./lib/contest";
import _ from "lodash";
import pangu from "pangu";

export type config = {
    abbrList?: string[],
    days?: number,
    sort?: boolean,
    running?: boolean,
    upcoming?: boolean;
};

const defaultConfig = {
    abbrList: Object.keys(alloj),
    days: 3,
    sort: true,
    running: true,
    upcoming: true
};

function resolveConfig(config?: config)
{
    const cfg = { ...defaultConfig, ...config };
    if(cfg.abbrList.length == 0) cfg.abbrList = defaultConfig.abbrList;
    return cfg;
}

/**
 * Get the list of all contests matching the given config
 * @param config The config of contests that want to get
 * @returns A Promise that contains an array of all contests that match the given config
 */
export async function getContests(config?: config): Promise<{ running: contest[], upcoming: contest[]; }>
{
    const cfg = resolveConfig(config);
    const contests = (await Promise.all(
        cfg.abbrList.map(
            async abbr =>
            {
                try { return await alloj[abbr].get(); }
                catch(e)
                {
                    console.error(`Failed to get contest information for ${alloj[abbr].name}, details:`);
                    console.error(e);
                    return [];
                }
            }
        )
    )).reduce((ls1, ls2) => ls1.concat(ls2));
    const ret = {
        running: cfg.running ? contests.filter(ct => ct.startTime <= new Date() && ct.endTime > new Date()) : [],
        upcoming: cfg.upcoming ? contests.filter(ct => ct.startTime > new Date() && (cfg.days === -1 || ct.startTime <= new Date(Date.now() + cfg.days * 86400000))) : []
    };
    if(cfg.sort) Object.values(ret).forEach(ct => ct.sort((a, b) => a.startTime.getTime() - b.startTime.getTime()));
    return ret;
}

/**
 * Get the detailed text of all contests matching the given config
 * @param config The config of contests that want to get
 * @param language Language of the output text
 * @returns A string containing detail text of contests that match the given config
 */
export async function getContestsInfoText(config?: config, language = "zh-CN")
{
    const cfg = resolveConfig(config);
    const lang = await getLangDict(language);
    const { running, upcoming } = await getContests(cfg);
    const info: string[] = [];

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

    if(cfg.running)
    {
        if(running.length)
        {
            info.push(_.template(lang.runnning)({
                contestCount: running.length,
                oj: _.uniq(running.map(contest => contest.ojName))
            }));
            info.push(...msg(running));
        }
        else info.push(lang.norunning);
    }

    if(cfg.upcoming)
    {
        if(upcoming.length)
        {
            info.push(_.template(lang.upcoming)({
                contestCount: upcoming.length,
                days: cfg.days,
                oj: _.uniq(upcoming.map(contest => contest.ojName))
            }));
            info.push(...msg(upcoming));
        }
        else info.push(_.template(lang.noupcoming)({ days: cfg.days }));
    }

    return pangu.spacing(info.join("\n\n"));
}

export * from "./lib/contest";
export { cli } from "./cli";
export { oj, addOJ } from "./lib/oj";
