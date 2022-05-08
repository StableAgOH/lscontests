import { name, version } from "./package.json";
import { program } from "commander";
import { Contest, getters } from "./src/contest/contest";
import list from "./src/list";

program
    .name(name)
    .version(version)
    .option("-a, --all", "List all contests")
    .option("-d, --days", "Only list contests within a given number of days", "3")
    .parse();

const opts = program.opts();

async function main() {
    const cts: Contest[] = [];
    if (program.args.length === 0 || opts.all) cts.push(...await list(Object.values(getters), opts.days as number));
    console.log(cts);
}

main();
