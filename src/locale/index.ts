import en from "./en.json";
import zhCN from "./zh-CN.json";
import zhTW from "./zh-TW.json";

export const langList = ["en", "zh-CN", "zh-TW"];

export type langDict = {
    runnning: string,
    norunning: string,
    upcoming: string,
    upcoming_all: string,
    noupcoming: string,
    noupcoming_all: string,
    ojName: string,
    name: string,
    rule: string,
    startTime: string,
    endTime: string;
};

export async function getLangDict(language: string): Promise<langDict>
{
    if(!langList.includes(language)) throw new Error(`Illegal language ${language}, the allowed languages are ${langList}`);
    switch (language)
    {
        case "en": return en;
        case "zh-CN": return zhCN;
        case "zh-TW": return zhTW;
        default: return en;
    }
}
