import { getGetterList, oj } from "./contest/contest";

export default async function list(ojs: oj[], days: number) {
    return Promise.all(
        getGetterList(ojs).map(
            async (get) => (await get()).filter(
                (ct) => ct.startTime <= new Date(Date.now() + (days as number) * 86400000)
            )
        )
    );
}
