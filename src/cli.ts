#!/usr/bin/env node
import commander from "commander";
import _ from "lodash";
import winston from "winston";
import Lscontests from ".";
import { bin, version } from "../package.json";
import { alloj } from "./lib/oj";
import { langList } from "./locale";

function initCmd()
{
    return new commander.Command()
        .version(version)
        .option("-d, --days, <day>", "number of days to display, set to 0 to get all contests infomation", "3")
        .option("-l, --list", "list all supported OJ and it's abbreviation")
        .option("-s, --silent", "do not print log")
        .addOption(new commander.Option("-o, --oj <ojs...>", "OJs to display").choices(Object.keys(alloj)))
        .addOption(new commander.Option("-r, --raw", "print raw contest list").conflicts("language"))
        .addOption(new commander.Option("-L, --language <lang>", "set output language").default("zh-CN").choices(langList))
        .option("--no-sort", "do not sort by contests start time, but by OJ order")
        .option("--no-running", "do not list all running contests")
        .option("--no-upcoming", "do not list all upcoming contests");
}

/**
 * CLI entrypoint
 * @param args Arguments
 * @param name Program name
 * @param out Output result
 * @param log_level Log level
 * @param log_transport A winston transport instance
 */
export async function cli(
    args?: string,
    name?: string,
    out: (msg: string) => void = console.log,
    log_level = "info",
    log_transport = winston.transports.Console
)
{
    const cmd = initCmd()
        .name(name ?? Object.keys(bin)[0])
        .configureOutput({
            writeOut: out,
            writeErr: out
        })
        .exitOverride();
    try { cmd.parse(args?.split(" "), { from: "user" }); }
    catch(e) { return; }

    const opts = cmd.opts();
    if(opts.list) out(JSON.stringify(_.mapValues(alloj, val => val.name), null, 2));
    else
    {
        const lsct = new Lscontests({
            abbrList: _.uniq(opts.oj),
            days: parseInt(opts.days),
            sort: opts.sort,
            running: opts.running,
            upcoming: opts.upcoming,
            silent: opts.silent
        }, log_level, log_transport);
        if(opts.raw) out(JSON.stringify(await lsct.getContests(), null, 2));
        else out(await lsct.getContestsText(opts.language));
    }
}

if(require.main === module) cli();
