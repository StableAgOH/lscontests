import axios from "axios";
import * as cheerio from "cheerio";
import { contest } from "../contest";
import { oj } from ".";

type result = {
    title: string,
    titleSlug: string,
    startTime: number,
    cardImg: string | null,
    duration: number;
};

const headers = {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36",
};

export const lc: oj = {
    name: "LeetCode",
    async get()
    {
        const response = await axios.get("https://leetcode.com/contest", { headers });
        const $ = cheerio.load(response.data);
        const resList: result[] = JSON.parse($("#__NEXT_DATA__").html() ?? "")
            .props.pageProps.dehydratedState.queries
            .find((v: { queryKey: unknown[]; }) => v.queryKey[0] === "topTwoContests")
            .state.data.topTwoContests;
        return resList.map((res): contest =>
        {
            return {
                ojName: lc.name,
                name: res.title,
                rule: "AtCoder",
                startTime: new Date(res.startTime * 1000),
                endTime: new Date((res.startTime + res.duration) * 1000),
                url: `https://leetcode.com/contest/${res.titleSlug}`
            };
        });
    }
};
