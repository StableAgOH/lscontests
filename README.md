# lscontests

[![GitHub Repo stars](https://img.shields.io/github/stars/StableAgOH/lscontests?style=social)](https://github.com/StableAgOH/lscontests)
[![GitHub commit activity](https://img.shields.io/github/commit-activity/m/StableAgOH/lscontests?logo=github)](https://github.com/StableAgOH/lscontests)
[![License](https://img.shields.io/github/license/StableAgOH/lscontests)](https://github.com/StableAgOH/lscontests)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

[![npm](https://img.shields.io/npm/v/lscontests?logo=npm)](https://www.npmjs.com/package/lscontests)
[![npm](https://img.shields.io/npm/dw/lscontests?logo=npm)](https://www.npmjs.com/package/lscontests)

A tool to get information about the contests on each OJ.

[中文文档](./README-zh-CN.md)

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
  -d, --days, <day>      number of days to display (default: "3")
  -l, --list             list all supported OJ and it's abbreviation
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
(*The following content was automatically generated using [semantic-release](https://github.com/semantic-release/semantic-release) on Sun, 15 May 2022 16:13:18 GMT*)

<details>
<summary> <code>> lsct -L en</code> </summary>

```text
There are 2 contests is running on NowCoder

OJ: NowCoder
Contest name: 牛客竞赛博弈专题班 Sprague-Grundy 函数（SG 函数、图游戏、Nim 和）
Rule: ICPC
Start time: 5/13/2022, 04:00:00
End time: 5/21/2022, 13:00:00
https://ac.nowcoder.com/acm/contest/34655

OJ: NowCoder
Contest name: 2022 图论班第一章图匹配例题与习题
Rule: ICPC
Start time: 5/13/2022, 06:00:00
End time: 5/30/2022, 08:00:00
https://ac.nowcoder.com/acm/contest/34649

No contests for the next 3 days
```

</details>

<details>
<summary> <code>> lsct -o at cf -d 7 -L en</code> </summary>

```text
No running contests

There are 4 contests on Codeforces,AtCoder in the next 7 days

OJ: Codeforces
Contest name: Codeforces Round #792 (Div. 1)
Rule: Codeforces
Start time: 5/19/2022, 14:35:00
End time: 5/19/2022, 16:35:00
https://codeforces.com/contests/1683

OJ: Codeforces
Contest name: Codeforces Round #792 (Div. 2)
Rule: Codeforces
Start time: 5/19/2022, 14:35:00
End time: 5/19/2022, 16:35:00
https://codeforces.com/contests/1684

OJ: AtCoder
Contest name: Ⓐ AtCoder Beginner Contest 252
Rule: AtCoder
Start time: 5/21/2022, 12:00:00
End time: 5/21/2022, 13:40:00
https://atcoder.jp/contests/abc252

OJ: Codeforces
Contest name: Codeforces Round #793 (Div. 2)
Rule: Codeforces
Start time: 5/22/2022, 14:35:00
End time: 5/22/2022, 16:35:00
https://codeforces.com/contests/1682
```

</details>

<details>
<summary> <code>> lsct -o at cf -d 7 -r --no-sort</code> </summary>

```json
{
  "running": [],
  "upcoming": [
    {
      "ojName": "AtCoder",
      "name": "Ⓐ AtCoder Beginner Contest 252",
      "rule": "AtCoder",
      "startTime": "2022-05-21T12:00:00.000Z",
      "endTime": "2022-05-21T13:40:00.000Z",
      "url": "https://atcoder.jp/contests/abc252"
    },
    {
      "ojName": "Codeforces",
      "name": "Codeforces Round #793 (Div. 2)",
      "rule": "Codeforces",
      "startTime": "2022-05-22T14:35:00.000Z",
      "endTime": "2022-05-22T16:35:00.000Z",
      "url": "https://codeforces.com/contests/1682"
    },
    {
      "ojName": "Codeforces",
      "name": "Codeforces Round #792 (Div. 1)",
      "rule": "Codeforces",
      "startTime": "2022-05-19T14:35:00.000Z",
      "endTime": "2022-05-19T16:35:00.000Z",
      "url": "https://codeforces.com/contests/1683"
    },
    {
      "ojName": "Codeforces",
      "name": "Codeforces Round #792 (Div. 2)",
      "rule": "Codeforces",
      "startTime": "2022-05-19T14:35:00.000Z",
      "endTime": "2022-05-19T16:35:00.000Z",
      "url": "https://codeforces.com/contests/1684"
    }
  ]
}
```

</details>
<!-- block_cli end -->

### API

For more detailed API documentation, please visit <https://lsct.agoh.xyz>.

If you want to get a list of contest information in your project by calling *lscontests*, or if you need to add support for other OJs, then you can call the *lscontests* API as follows:

#### Get text for contests information

```typescript
import { getContestInfo } from "lscontests";

getContestsInfoText({ abbrList: ["cf", "lg"] }).then(console.log);
```

This code gives the same result as `lsct -o cf lg`.

#### Get list for contests information

```typescript
import { getContestList } from "lscontests";

getContests({ sort: false }).then(console.log);
```

This code gives the same result as `lsct -r --no-sort`.

#### Add support for other OJ

```typescript
import { addOJ, getContestsInfoText, getContests } from "lscontests";

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
    console.log(await getContestsInfoText({ abbrList: ["cf", "ts"], days: 1 }, "en"));
    console.log();
    console.log(await getContests({ abbrList: ["at", "ts"], days: 7 }));
}

main();
```

This code gives the following results:

```text
There are 2 contests is running on Codeforces,testOJ

OJ: Codeforces
Contest name: Educational Codeforces Round 128 (Rated for Div. 2)
Rule: ICPC
Start time: 2022/5/13 22:35:00
End time: 2022/5/14 00:35:00
https://codeforces.com/contests/1680

OJ: testOJ
Contest name: testContest
Rule: ICPC
Start time: 2022/5/13 23:23:31
End time: 2022/5/14 00:23:31
https://www.test.com

There are 1 contests on Codeforces,testOJ in the next 1 days

OJ: Codeforces
Contest name: Codeforces Round #791 (Div. 2)
Rule: Codeforces
Start time: 2022/5/14 17:35:00
End time: 2022/5/14 19:35:00
https://codeforces.com/contests/1679

{
  running: [
    {
      ojName: 'testOJ',
      name: 'testContest',
      rule: 'ICPC',
      startTime: 2022-05-13T15:23:37.245Z,
      endTime: 2022-05-13T16:23:37.246Z,
      url: 'https://www.test.com'
    }
  ],
  upcoming: [
    {
      ojName: 'AtCoder',
      name: 'Ⓐ Panasonic Programming Contest 2022(AtCoder Beginner Contest 251)',
      rule: 'AtCoder',
      startTime: 2022-05-14T12:00:00.000Z,
      endTime: 2022-05-14T13:40:00.000Z,
      url: 'https://atcoder.jp/contests/abc251'
    },
    {
      ojName: 'AtCoder',
      name: 'Ⓐ AtCoder Regular Contest 140',
      rule: 'AtCoder',
      startTime: 2022-05-15T12:00:00.000Z,
      endTime: 2022-05-15T14:00:00.000Z,
      url: 'https://atcoder.jp/contests/arc140'
    }
  ]
}
```

#### Use link CLI

```typescript
import { cli } from "lscontests";

cli("-o cf -L en").then(console.log);
```

This code gives the same result as `lsct -o cf -L en`.

## License

[GPL-3.0](https://www.gnu.org/licenses/gpl-3.0.html)
