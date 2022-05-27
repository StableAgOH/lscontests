import _ from "lodash";
import pangu from "pangu";
import winston from "winston";
import { Contest } from "./lib/contest";
import { alloj } from "./lib/oj";
import { getLangDict } from "./locale";

export interface LscontestsConfig
{
    abbrList?: string[],
    days?: number,
    sort?: boolean,
    running?: boolean,
    upcoming?: boolean,
    silent?: boolean;
}

export default class Lscontests
{
    private config = {
        abbrList: Object.keys(alloj),
        days: 3,
        sort: true,
        running: true,
        upcoming: true,
        silent: false
    };
    private logger: winston.Logger;

    constructor(config?: LscontestsConfig, log_level = "info", log_transport = winston.transports.Console)
    {
        this.config = { ...this.config, ...config };
        if(this.config.abbrList.length === 0) this.config.abbrList = Object.keys(alloj);
        this.logger = winston.createLogger({
            level: log_level,
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()
            ),
            transports: new log_transport({ silent: this.config.silent }),
        });
    }

    async getContests()
    {
        const contests = (await Promise.all(
            this.config.abbrList.map(
                async abbr =>
                {
                    try
                    {
                        const oj = alloj[abbr];
                        this.logger.info(`Start getting contests information about ${oj.name}`);
                        const res = (await oj.get()).sort((a, b) => a.startTime.getTime() - b.startTime.getTime());
                        this.logger.info(`Successfully get contests information about ${oj.name}`);
                        return res;
                    }
                    catch(e)
                    {
                        this.logger.error(`Failed to get contest information for ${alloj[abbr].name}, details:`);
                        this.logger.error(e);
                        return [];
                    }
                }
            )
        )).reduce((ls1, ls2) => ls1.concat(ls2));
        const ret = {
            running: this.config.running ? contests.filter(ct => ct.startTime <= new Date() && ct.endTime > new Date()) : [],
            upcoming: this.config.upcoming ? contests.filter(ct => ct.startTime > new Date() && (this.config.days === -1 || ct.startTime <= new Date(Date.now() + this.config.days * 86400000))) : []
        };
        if(this.config.sort) Object.values(ret).forEach(ct => ct.sort((a, b) => a.startTime.getTime() - b.startTime.getTime()));
        return ret;
    }

    async getContestsText(language = "zh-CN")
    {
        const lang = await getLangDict(language);
        const { running, upcoming } = await this.getContests();
        const info: string[] = [];

        function msg(contests: Contest[])
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

        if(this.config.running)
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

        if(this.config.upcoming)
        {
            if(this.config.days === -1)
            {
                if(upcoming.length)
                {
                    info.push(_.template(lang.upcoming_all)({
                        contestCount: upcoming.length,
                        oj: _.uniq(upcoming.map(contest => contest.ojName))
                    }));
                    info.push(...msg(upcoming));
                }
                else info.push(lang.noupcoming_all);
            }
            else
            {
                if(upcoming.length)
                {
                    info.push(_.template(lang.upcoming)({
                        contestCount: upcoming.length,
                        days: this.config.days,
                        oj: _.uniq(upcoming.map(contest => contest.ojName))
                    }));
                    info.push(...msg(upcoming));
                }
                else info.push(_.template(lang.noupcoming)({ days: this.config.days }));
            }
        }
        return pangu.spacing(info.join("\n\n"));
    }
}

export * from "./lib/contest";
export { cli } from "./cli";
export { OJ, addOJ } from "./lib/oj";
