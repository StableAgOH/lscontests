# lscontests

[![GitHub Repo stars](https://img.shields.io/github/stars/StableAgOH/lscontests?style=social)](https://github.com/StableAgOH/lscontests)
[![GitHub commit activity](https://img.shields.io/github/commit-activity/m/StableAgOH/lscontests?logo=github)](https://github.com/StableAgOH/lscontests)
[![License](https://img.shields.io/github/license/StableAgOH/lscontests)](https://github.com/StableAgOH/lscontests)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

[![npm](https://img.shields.io/npm/v/lscontests?logo=npm)](https://www.npmjs.com/package/lscontests)
[![npm](https://img.shields.io/npm/dw/lscontests?logo=npm)](https://www.npmjs.com/package/lscontests)

A tool to get information about the contests on each OJ.

[中文文档](https://github.com/StableAgOH/lscontests/blob/main/README-zh-CN.md)

## Installation

### Only use CLI

For npm: `npm install -g lscontests`

For yarn: `yarn global add lscontests`

### Add *lscontests* to your project

For npm: `npm install lscontests --save`

For yarn: `yarn add lscontests`

## Usage

### CLI

You can use cli to get a list of information about contests easily.

<!-- block_help begin -->
```text
Usage: lsct [options]

Options:
  -V, --version          output the version number
  -d, --days, <day>      number of days to display, set to -1 to get all
                         contests infomation (default: "3")
  -l, --list             list all supported OJ and it's abbreviation
  -s, --silent           do not print log
  -o, --oj <ojs...>      OJs to display (choices: "at", "cf", "lc", "lg", "nc")
  -r, --raw              print raw contest list
  -L, --language <lang>  set output language (choices: "en", "zh-CN", "zh-NE",
                         "zh-TW", default: "zh-CN")
  --no-sort              do not sort by contests start time, but by OJ order
  --no-running           do not list all running contests
  --no-upcoming          do not list all upcoming contests
  -h, --help             display help for command
```
<!-- block_help end -->

It performs as follows:

<!-- block_cli begin -->
(*The following content was automatically generated using [semantic-release](https://github.com/semantic-release/semantic-release) on Sat, 29 Oct 2022 17:43:19 GMT*)

<details>
<summary> <code>> lsct -L en</code> </summary>

```text
There are 2 contests is running on Luogu

OJ: Luogu
Contest name: CSP-J 2022 自测
Rule: IOI
Start time: 10/29/2022, 04:30:00
End time: 11/5/2022, 14:00:00
https://www.luogu.com.cn/contest/90215

OJ: Luogu
Contest name: CSP-S 2022 自测
Rule: IOI
Start time: 10/29/2022, 10:45:00
End time: 11/5/2022, 14:00:00
https://www.luogu.com.cn/contest/90216

There are 2 contests on LeetCode,AtCoder in the next 3 days

OJ: LeetCode
Contest name: Weekly Contest 317
Rule: AtCoder
Start time: 10/30/2022, 02:30:00
End time: 10/30/2022, 04:00:00
https://leetcode.com/contest/weekly-contest-317

OJ: AtCoder
Contest name: Ⓗ TOYOTA MOTOR CORPORATION Programming Contest 2022（AtCoder Heuristic Contest 015）
Rule: AtCoder
Start time: 10/30/2022, 06:00:00
End time: 10/30/2022, 10:00:00
https://atcoder.jp/contests/ahc015
```

</details>

<details>
<summary> <code>> lsct -o at cf -d 7 -L en</code> </summary>

```text
There are no running contests on AtCoder,Codeforces

There are 3 contests on AtCoder,Codeforces in the next 7 days

OJ: AtCoder
Contest name: Ⓗ TOYOTA MOTOR CORPORATION Programming Contest 2022（AtCoder Heuristic Contest 015）
Rule: AtCoder
Start time: 10/30/2022, 06:00:00
End time: 10/30/2022, 10:00:00
https://atcoder.jp/contests/ahc015

OJ: Codeforces
Contest name: Codeforces Round (Div. 2)
Rule: Codeforces
Start time: 11/4/2022, 14:35:00
End time: 11/4/2022, 16:35:00
https://codeforces.com/contests/1747

OJ: AtCoder
Contest name: Ⓐ AtCoder Beginner Contest 276
Rule: AtCoder
Start time: 11/5/2022, 12:00:00
End time: 11/5/2022, 13:40:00
https://atcoder.jp/contests/abc276
```

</details>

<details>
<summary> <code>> lsct -o at cf -d -1 -r --no-sort</code> </summary>

```json
{
  "running": [],
  "upcoming": [
    {
      "ojName": "AtCoder",
      "name": "Ⓗ TOYOTA MOTOR CORPORATION Programming Contest 2022（AtCoder Heuristic Contest 015）",
      "rule": "AtCoder",
      "startTime": "2022-10-30T06:00:00.000Z",
      "endTime": "2022-10-30T10:00:00.000Z",
      "url": "https://atcoder.jp/contests/ahc015"
    },
    {
      "ojName": "AtCoder",
      "name": "Ⓐ AtCoder Beginner Contest 276",
      "rule": "AtCoder",
      "startTime": "2022-11-05T12:00:00.000Z",
      "endTime": "2022-11-05T13:40:00.000Z",
      "url": "https://atcoder.jp/contests/abc276"
    },
    {
      "ojName": "AtCoder",
      "name": "Ⓗ HACK TO THE FUTURE 2023 qual（AtCoder Heuristic Contest 016）",
      "rule": "AtCoder",
      "startTime": "2022-11-11T10:00:00.000Z",
      "endTime": "2022-11-20T10:00:00.000Z",
      "url": "https://atcoder.jp/contests/ahc016"
    },
    {
      "ojName": "AtCoder",
      "name": "Ⓐ Daiwa Securities Co. Ltd. Programming Contest 2022 Autumn (AtCoder Beginner Contest 277)",
      "rule": "AtCoder",
      "startTime": "2022-11-12T12:00:00.000Z",
      "endTime": "2022-11-12T13:40:00.000Z",
      "url": "https://atcoder.jp/contests/abc277"
    },
    {
      "ojName": "AtCoder",
      "name": "Ⓐ TOYOTA SYSTEMS Programming Contest 2022(AtCoder Beginner Contest 279)",
      "rule": "AtCoder",
      "startTime": "2022-11-26T12:00:00.000Z",
      "endTime": "2022-11-26T13:40:00.000Z",
      "url": "https://atcoder.jp/contests/abc279"
    },
    {
      "ojName": "Codeforces",
      "name": "Codeforces Round (Div. 2)",
      "rule": "Codeforces",
      "startTime": "2022-11-04T14:35:00.000Z",
      "endTime": "2022-11-04T16:35:00.000Z",
      "url": "https://codeforces.com/contests/1747"
    },
    {
      "ojName": "Codeforces",
      "name": "CodeTON Round 3 (Div. 1 + Div. 2, Rated, Prizes!)",
      "rule": "Codeforces",
      "startTime": "2022-11-06T14:35:00.000Z",
      "endTime": "2022-11-06T16:35:00.000Z",
      "url": "https://codeforces.com/contests/1750"
    },
    {
      "ojName": "Codeforces",
      "name": "Codeforces Round (Div. 2)",
      "rule": "Codeforces",
      "startTime": "2022-11-12T14:35:00.000Z",
      "endTime": "2022-11-12T16:35:00.000Z",
      "url": "https://codeforces.com/contests/1748"
    },
    {
      "ojName": "Codeforces",
      "name": "45th ICPC World Finals Challenge powered by Huawei - Problem 1",
      "startTime": "2022-11-17T00:00:00.000Z",
      "endTime": "2022-11-30T23:59:00.000Z",
      "url": "https://codeforces.com/contests/1751"
    },
    {
      "ojName": "Codeforces",
      "name": "45th ICPC World Finals Challenge powered by Huawei - Problem 2",
      "startTime": "2022-11-17T00:00:00.000Z",
      "endTime": "2022-11-30T23:59:00.000Z",
      "url": "https://codeforces.com/contests/1752"
    },
    {
      "ojName": "Codeforces",
      "name": "Codeforces Round (Div. 2)",
      "rule": "Codeforces",
      "startTime": "2022-12-27T14:35:00.000Z",
      "endTime": "2022-12-27T16:35:00.000Z",
      "url": "https://codeforces.com/contests/1731"
    }
  ]
}
```

</details>
<!-- block_cli end -->

### API

For more detailed API documentation, please visit <https://lsct.stagoh.com>.

If you want to get a list of contest information in your project by calling *lscontests*, or if you need to add support for other OJs, then you can call the *lscontests* API as follows:

#### Get text for contests information

```typescript
import lsct from "lscontests";

new lsct({ abbrList: ["cf", "lg"] }).getContestsText().then(console.log);
```

This code gives the same result as `lsct -o cf lg`.

#### Get list for contests information

```typescript
import lsct from "lscontests";

new lsct({ abbrList: ["cf", "lg"] }).getContests().then(console.log);
```

This code gives the same result as `lsct -r --no-sort`.

#### Add support for other OJ

```typescript
import lsct, { addOJ } from "lscontests";

addOJ("ts", {
    name: "testOJ", get: async () => [{
        ojName: "testOJ",
        name: "testContest",
        rule: "ICPC",
        startTime: new Date(Date.now() - 1),
        endTime: new Date(Date.now() + 3600000),
        url: "https://www.test.com"
    }]
});

async function main() {
    console.log(await new lsct({ abbrList: ["cf", "ts"], days: 1 }).getContestsText("en"));
    console.log();
    console.log(await new lsct({ abbrList: ["at", "ts"], days: 7 }).getContests());
}

main();
```

This code gives the following results:

```text
There are 1 contests is running on testOJ

OJ: testOJ
Contest name: testContest
Rule: ICPC
Start time: 2022/6/10 21:43:58
End time: 2022/6/10 22:43:58
https://www.test.com

There are 1 contests on Codeforces in the next 1 days

OJ: Codeforces
Contest name: Codeforces Round #798 (Div. 2)
Rule: Codeforces
Start time: 2022/6/11 00:35:00
End time: 2022/6/11 02:35:00
https://codeforces.com/contests/1689

{
  running: [
    {
      ojName: 'testOJ',
      name: 'testContest',
      rule: 'ICPC',
      startTime: 2022-06-10T13:44:01.380Z,
      endTime: 2022-06-10T14:44:01.381Z,
      url: 'https://www.test.com'
    }
  ],
  upcoming: [
    {
      ojName: 'AtCoder',
      name: 'Ⓐ Aising Programming Contest 2022（AtCoder Beginner Contest 255）',
      rule: 'AtCoder',
      startTime: 2022-06-11T12:00:00.000Z,
      endTime: 2022-06-11T13:40:00.000Z,
      url: 'https://atcoder.jp/contests/abc255'
    }
  ]
}
```

#### Use link CLI

```typescript
import { cli } from "lscontests";

cli("-o cf -L en", undefined, console.log);
```

This code gives the same result as `lsct -o cf -L en`.

## License

[GPL-3.0](https://www.gnu.org/licenses/gpl-3.0.html)
