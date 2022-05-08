import { Contest } from "./contest/contest";

export default async function list(getters: (() => Promise<Contest[]>)[], days: number) {
    const cts: Contest[] = [];
    for (const get of getters) {
        const res = await get();
        cts.push(...res.filter((ct) => ct.startTime <= new Date(Date.now() + (days as number) * 86400000)));
    }
    return cts;
}
