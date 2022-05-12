#!/usr/bin/env node
import { bin, version } from "../package.json";
import { Command, Option } from "commander";
import { alloj } from "./lib/oj";
import { config, getContestList, getContestInfo } from ".";
import { langList } from "./locale";
import _ from "lodash";

function initCmd()
{
    return new Command()
        .name(Object.keys(bin)[0])
        .version(version)
        .option("-d, --days, <day>", "Number of days to get contests information", "3")
        .option("-l, --list", "List all supported OJ")
        .addOption(new Option("-o, --oj <ojs...>", "OJs to get contests information").choices(Object.keys(alloj)))
        .addOption(new Option("-r, --raw", "Print raw contest list").conflicts("language"))
        .addOption(new Option("-L, --language <lang>", "Set output language").default("zh-CN").choices(langList))
        .option("--no-sort", "Do not sort by contests start time, but by OJ order");
}

export async function cli(arg?: string, name?: string)
{
    const cmd = initCmd();
    if(arg === undefined) cmd.parse();
    else
    {
        let msg = "";
        try
        {
            if(name) cmd.name(name);
            cmd
                .configureOutput({
                    writeOut: (str) => msg = str,
                    writeErr: (str) => msg = str,
                    outputError: (str) => msg = str
                })
                .exitOverride()
                .parse(arg.split(" "), { from: "user" });
        }
        catch(e) { return msg; }
    }

    const opts = cmd.opts();
    if(opts.list) return Object.values(alloj).map((oj) => oj.name).join("\n");
    else
    {
        const config: config = {
            abbrList: _.uniq(opts.oj),
            days: opts.days as number,
            sort: opts.sort
        };
        if(opts.raw) return JSON.stringify(await getContestList(config), null, 2);
        else return await getContestInfo(config, opts.language);
    }
}

if(require.main === module) cli().then(console.log);
