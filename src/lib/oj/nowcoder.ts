import axios from "axios";
import * as cheerio from "cheerio";
import { oj } from ".";
import { contest, rule } from "../contest";

type result = {
    isSignUp: boolean,
    teamName: string,
    contestDuration: number,
    contestEndTime: number,
    contestStartTime: number,
    topCategoryId: number,
    creatorId: number,
    creatorName: string,
    signUpEndCountDownTime: number,
    contestName: string,
    type: number,
    settingInfo: {
        allowTeamSignUp: boolean,
        isProblemAutoOpen: true,
        needSignUpField: boolean,
        problemOriginal: true,
        needRankFrozen: boolean,
        logoUrl: string,
        needSignUpRedirect: boolean,
        forceOnlyMyStatusFilter: boolean,
        needUserNameFormat: boolean,
        sameEndTimeAsSignUpEnd: true,
        needPassword: boolean,
        organizerName: string,
        needCharge: boolean,
        allowMessage: true,
        ratingStatus: string,
        needRatingUpperLimit: boolean,
        rankSaveStatus: string
    },
    countDownTime: number,
    signUpCount: number,
    contestId: number,
    contestSignUpEndTime: number,
    userLevel: number,
    teamId: number,
    isManager: boolean,
    isTeamSignUp: boolean,
    contestSignUpStartTime: number,
    signUpCountDownTime: number,
    filledPassword: boolean
}

enum topCategoryFilter {
    NOWCODERSERIES = 13,
    SCHOOLCONTEST
}

const url = "https://ac.nowcoder.com/acm/contest/vip-index";

async function getResultList(tcf: topCategoryFilter) {
    const html = (await axios.get(`${url}?topCategoryFilter=${tcf}`)).data;
    const $ = cheerio.load(html);
    const ls: result[] = [];
    $("div[class='platform-item js-item ']").each(function () {
        ls.push(JSON.parse(cheerio.load(this.attribs["data-json"]).text()));
    });
    return ls;
}

const ruleRecord: Record<number, rule> = {
    0: "ICPC",
    1: "IOI",
    2: "OI"
};

export const nc: oj = {
    name: "NowCoder",
    get: async () => {
        const res: result[] = [
            ...await getResultList(topCategoryFilter.NOWCODERSERIES),
            ...await getResultList(topCategoryFilter.SCHOOLCONTEST)
        ];
        return res.filter((res) => res.signUpEndCountDownTime > 0).map((res): contest => {
            return {
                ojName: nc.name,
                name: res.contestName,
                rule: ruleRecord[res.type],
                startTime: new Date(res.contestStartTime),
                endTime: new Date(res.contestEndTime),
                url: `https://ac.nowcoder.com/acm/contest/${res.contestId}`
            };
        });
    }
};
