import { addOJ, alloj } from "./lib/oj";

async function list(abbrList?: string[], days = 3, sort = true) {
    if (!abbrList) abbrList = Object.keys(alloj);
    const contests = (await Promise.all(
        abbrList.map(
            async (abbr) => (await alloj[abbr].get()).filter(
                (ct) => ct.startTime <= new Date(Date.now() + (days as number) * 86400000)
            )
        )
    )).reduce((ls1, ls2) => ls1.concat(ls2));
    if (sort) contests.sort((a, b) => a.startTime.getTime() - b.startTime.getTime());
    return contests;
}

export { addOJ, list };
