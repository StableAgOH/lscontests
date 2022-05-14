#!/usr/bin/env node
import { bin, version } from "../package.json";
import { Command, Option } from "commander";
import { alloj } from "./lib/oj";
import { config, getContests, getContestsInfoText } from ".";
import { langList } from "./locale";
import _ from "lodash";

function initCmd()
{
    return new Command()
        .name(Object.keys(bin)[0])
        .version(version)
        .option("-d, --days, <day>", "number of days to display", "3")
        .option("-l, --list", "list all supported OJ and it's abbreviation")
        .addOption(new Option("-o, --oj <ojs...>", "OJs to display").choices(Object.keys(alloj)))
        .addOption(new Option("-r, --raw", "print raw contest list").conflicts("language"))
        .addOption(new Option("-L, --language <lang>", "set output language").default("zh-CN").choices(langList))
        .option("--no-sort", "do not sort by contests start time, but by OJ order");
}


/**
 * CLI entrypoint
 * @param arg Arguments
 * @param name Program name
 * @returns CLI output content
 */
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
                    writeOut: str => msg = str,
                    writeErr: str => msg = str,
                    outputError: str => msg = str
                })
                .exitOverride()
                .parse(arg.split(" "), { from: "user" });
        }
        catch(e) { return msg; }
    }

    const opts = cmd.opts();
    if(opts.list) return "  abbr     OJ\n" + JSON.stringify(_.mapValues(alloj, val => val.name), null, 2);
    else
    {
        const config: config = {
            abbrList: _.uniq(opts.oj),
            days: opts.days as number,
            sort: opts.sort
        };
        if(opts.raw) return JSON.stringify(await getContests(config), null, 2);
        else return await getContestsInfoText(config, opts.language);
    }
}

if(require.main === module) cli().then(console.log);
