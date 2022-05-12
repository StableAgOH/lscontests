#!/usr/bin/env node
import { version } from "../package.json";
import { Command, Option } from "commander";
import { alloj } from "./lib/oj";
import { config, getContestList, getContestInfo } from ".";
import { langList } from "./locale";

function initCmd()
{
    return new Command()
        .name("lsct")
        .version(version)
        .option("-d, --days, <day>", "Number of days to get contests information", "3")
        .option("-l, --list", "List all supported OJ")
        .addOption(new Option("-o, --oj <ojs...>", "OJs to get contests information").choices(Object.keys(alloj)))
        .addOption(new Option("-r, --raw", "Print raw contest list").conflicts("language"))
        .addOption(new Option("-L, --language <lang>", "Set output language").default("zh-CN").choices(langList))
        .option("--no-sort", "Do not sort by contests start time, but by OJ order");
}

export async function cli(arg?: string)
{
    const cmd = initCmd();
    if(arg)
    {
        let msg = "";
        try
        {
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
    else cmd.parse();

    const opts = cmd.opts();
    if(opts.list) return Object.values(alloj).map((oj) => oj.name).join("\n");
    else
    {
        const config: config = {
            abbrList: opts.oj,
            days: opts.days as number,
            sort: opts.sort
        };
        if(opts.raw) return JSON.stringify(await getContestList(config), null, 2);
        else return await getContestInfo(config, opts.language);
    }
}

if(require.main === module) cli().then(console.log);
