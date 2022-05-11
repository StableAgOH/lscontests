import axios from "axios";
import * as cheerio from "cheerio";
import { contest } from "../contest";
import { oj } from ".";

export const at: oj = {
    name: "AtCoder",
    get: async () => {
        const response = await axios.get("https://atcoder.jp/contests");
        const $ = cheerio.load(response.data);
        const contests: contest[] = [];
        $("#contest-table-upcoming table > tbody > tr").each(function () {
            const ct: contest = {
                ojName: at.name,
                name: "",
                rule: "AtCoder",
                startTime: new Date(0),
                endTime: new Date(0),
                url: ""
            };
            $("td", this).each(function (idx) {
                if (idx == 0) ct.startTime = new Date($(this).text());
                else if (idx == 1) {
                    const ele = $("a", this);
                    ct.name = `${$("span:first", this).text()} ${ele.text()}`;
                    ct.url = `https://atcoder.jp${ele.attr().href}`;
                }
                else if (idx == 2) {
                    const [h, s] = $(this).text().split(":");
                    ct.endTime = new Date(ct.startTime.getTime() + (parseInt(h) * 60 + parseInt(s)) * 1000);
                }
            });
            contests.push(ct);
        });
        return contests;
    }
};
