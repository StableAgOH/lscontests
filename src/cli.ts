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

export async function cli(arg?: string) {
    if (arg?.includes("-h") || arg?.includes("--help")) {
        console.warn(
            "Warnning: If -h or --help is included in the arguments, the program will print the help message and exit immediately, use getHelp() instead"
        );
        return "";
    }

    program.parse(arg ? [...process.argv.slice(0, 2), ...arg.split(" ")] : process.argv);

    const opts = program.opts();
    if (opts.list) return Object.values(alloj).map((oj) => oj.name).join("\n");
    else {
        const config: config = {
            abbrList: opts.oj,
            days: opts.days as number,
            sort: opts.sort
        };
        if (opts.raw) return (await getContestList(config)).join("\n");
        else return await getContestInfo(config, opts.language);
    }
}

export function getHelp(name: string) { return program.name(name).helpInformation(); }

if (require.main === module) cli().then(console.log);
