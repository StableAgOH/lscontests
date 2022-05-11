#!/usr/bin/env node
import { version } from "../package.json";
import { Option, program } from "commander";
import { alloj } from "./lib/oj";
import { list } from ".";

program
    .name("lsct")
    .version(version)
    .option("-d, --days, <day>", "Number of days to get contests information", "3")
    .option("-l, --list", "List all supported OJ")
    .option("--no-sort", "Do not sort by contests start time (default sort by OJ)")
    .addOption(new Option("-o, --oj <ojs...>", "OJs to get contests information").choices(Object.keys(alloj)))
    .parse();

const opts = program.opts();

async function main() {
    if (opts.list) console.log(Object.values(alloj).map((oj) => oj.name));
    else console.log(await list(opts.oj, opts.days as number, opts.sort));
}

main();
