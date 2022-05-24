import { readdirSync } from "fs";

export const langList = readdirSync(`${__dirname}`).filter(fileName => fileName.endsWith(".json")).map(fileName => fileName.replace(".json", ""));

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
    return import(`./${language}.json`);
}
