import { alloj } from "./oj";

export default async function list(abbrList: string[], days: number) {
    if (!abbrList) abbrList = Object.keys(alloj);
    return (await Promise.all(
        abbrList.map(
            async (abbr) => (await alloj[abbr].get()).filter(
                (ct) => ct.startTime <= new Date(Date.now() + (days as number) * 86400000)
            )
        )
    )).reduce((ls1, ls2) => ls1.concat(ls2));
}
