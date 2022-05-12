#!/usr/bin/env node
import { version } from "../package.json";
import { Option, program } from "commander";
import { alloj } from "./lib/oj";
import { config, getContestList, getContestInfo, langList } from ".";

program
    .name("lsct")
    .version(version)
    .option("-d, --days, <day>", "Number of days to get contests information", "3")
    .option("-l, --list", "List all supported OJ")
    .addOption(new Option("-o, --oj <ojs...>", "OJs to get contests information").choices(Object.keys(alloj)))
    .addOption(new Option("-r, --raw", "Print raw contest list").conflicts("language"))
    .addOption(new Option("-L, --language <lang>", "Set output language").default("zh-CN").choices(langList))
    .option("--no-sort", "Do not sort by contests start time, but by OJ order");

export async function cli(arg?: string)
{
    let ret = "";
    if(arg)
    {
        try
        {
            program
                .configureOutput({
                    writeOut: (str) => ret = str,
                    writeErr: (str) => ret = str,
                    outputError: (str) => ret = str
                })
                .exitOverride()
                .parse(arg.split(" "), { from: "user" });
        }
        catch(e) { return ret; }
    }
    else program.parse();

    const opts = program.opts();
    if(opts.list) return Object.values(alloj).map((oj) => oj.name).join("\n");
    else
    {
        const config: config = {
            abbrList: opts.oj,
            days: opts.days as number,
            sort: opts.sort
        };
        if(opts.raw) return (await getContestList(config)).join("\n");
        else return await getContestInfo(config, opts.language);
    }
}

if(require.main === module) cli().then(console.log);
