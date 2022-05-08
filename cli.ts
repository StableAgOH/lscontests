import { version } from "./package.json";
import { Option, program } from "commander";
import { alloj } from "./src/contest/contest";
import list from "./src/list";

program
    .name("lsct")
    .version(version)
    .option("-d, --days", "Number of days to get contests information", "3")
    .option("-l, --list", "List all supported OJ")
    .addOption(new Option("-o, --oj <ojs...>", "OJs to get contests information").choices(alloj))
    .parse();

const opts = program.opts();

async function main() {
    if (opts.list) console.log(alloj);
    else console.log(await list(opts.oj, opts.days as number));
}

main();
