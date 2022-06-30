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
(*The following content was automatically generated using [semantic-release](https://github.com/semantic-release/semantic-release) on Thu, 30 Jun 2022 09:00:29 GMT*)

<details>
<summary> <code>> lsct -L en</code> </summary>

```text
There are no running contests on AtCoder,Codeforces,LeetCode,Luogu,NowCoder

There are 4 contests on NowCoder,AtCoder,LeetCode in the next 3 days

OJ: NowCoder
Contest name: 第 20 届上海大学程序设计联赛夏季赛（校外同步赛）
Rule: ICPC
Start time: 7/2/2022, 05:00:00
End time: 7/2/2022, 08:30:00
https://ac.nowcoder.com/acm/contest/36652

OJ: AtCoder
Contest name: Ⓐ AtCoder Beginner Contest 258
Rule: AtCoder
Start time: 7/2/2022, 12:00:00
End time: 7/2/2022, 13:40:00
https://atcoder.jp/contests/abc258

OJ: LeetCode
Contest name: Weekly Contest 300
Rule: AtCoder
Start time: 7/3/2022, 02:30:00
End time: 7/3/2022, 04:00:00
https://leetcode.com/contest/weekly-contest-300

OJ: AtCoder
Contest name: Ⓗ AtCoder Heuristic Contest 012
Rule: AtCoder
Start time: 7/3/2022, 06:00:00
End time: 7/3/2022, 10:00:00
https://atcoder.jp/contests/ahc012
```

</details>

<details>
<summary> <code>> lsct -o at cf -d 7 -L en</code> </summary>

```text
There are no running contests on AtCoder,Codeforces

There are 3 contests on AtCoder,Codeforces in the next 7 days

OJ: AtCoder
Contest name: Ⓐ AtCoder Beginner Contest 258
Rule: AtCoder
Start time: 7/2/2022, 12:00:00
End time: 7/2/2022, 13:40:00
https://atcoder.jp/contests/abc258

OJ: AtCoder
Contest name: Ⓗ AtCoder Heuristic Contest 012
Rule: AtCoder
Start time: 7/3/2022, 06:00:00
End time: 7/3/2022, 10:00:00
https://atcoder.jp/contests/ahc012

OJ: Codeforces
Contest name: Codeforces Round #804 (Div. 2)
Rule: Codeforces
Start time: 7/4/2022, 14:35:00
End time: 7/4/2022, 16:35:00
https://codeforces.com/contests/1699
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
      "name": "Ⓐ AtCoder Beginner Contest 258",
      "rule": "AtCoder",
      "startTime": "2022-07-02T12:00:00.000Z",
      "endTime": "2022-07-02T13:40:00.000Z",
      "url": "https://atcoder.jp/contests/abc258"
    },
    {
      "ojName": "AtCoder",
      "name": "Ⓗ AtCoder Heuristic Contest 012",
      "rule": "AtCoder",
      "startTime": "2022-07-03T06:00:00.000Z",
      "endTime": "2022-07-03T10:00:00.000Z",
      "url": "https://atcoder.jp/contests/ahc012"
    },
    {
      "ojName": "AtCoder",
      "name": "Ⓐ AtCoder Beginner Contest 259",
      "rule": "AtCoder",
      "startTime": "2022-07-09T12:00:00.000Z",
      "endTime": "2022-07-09T13:40:00.000Z",
      "url": "https://atcoder.jp/contests/abc259"
    },
    {
      "ojName": "AtCoder",
      "name": "Ⓐ AtCoder Regular Contest 144",
      "rule": "AtCoder",
      "startTime": "2022-07-16T12:00:00.000Z",
      "endTime": "2022-07-16T14:00:00.000Z",
      "url": "https://atcoder.jp/contests/arc144"
    },
    {
      "ojName": "AtCoder",
      "name": "Ⓐ AtCoder Beginner Contest 260",
      "rule": "AtCoder",
      "startTime": "2022-07-17T12:00:00.000Z",
      "endTime": "2022-07-17T13:40:00.000Z",
      "url": "https://atcoder.jp/contests/abc260"
    },
    {
      "ojName": "AtCoder",
      "name": "Ⓐ AtCoder Regular Contest 145",
      "rule": "AtCoder",
      "startTime": "2022-07-30T12:00:00.000Z",
      "endTime": "2022-07-30T14:00:00.000Z",
      "url": "https://atcoder.jp/contests/arc145"
    },
    {
      "ojName": "AtCoder",
      "name": "Ⓐ AtCoder Grand Contest 058",
      "rule": "AtCoder",
      "startTime": "2022-08-14T12:00:00.000Z",
      "endTime": "2022-08-14T15:00:00.000Z",
      "url": "https://atcoder.jp/contests/agc058"
    },
    {
      "ojName": "Codeforces",
      "name": "Codeforces Round #804 (Div. 2)",
      "rule": "Codeforces",
      "startTime": "2022-07-04T14:35:00.000Z",
      "endTime": "2022-07-04T16:35:00.000Z",
      "url": "https://codeforces.com/contests/1699"
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
