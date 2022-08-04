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
(*The following content was automatically generated using [semantic-release](https://github.com/semantic-release/semantic-release) on Thu, 04 Aug 2022 07:30:10 GMT*)

<details>
<summary> <code>> lsct -L en</code> </summary>

```text
There are no running contests on AtCoder,Codeforces,LeetCode,Luogu,NowCoder

There are 11 contests on NowCoder,Codeforces,Luogu,AtCoder,LeetCode in the next 3 days

OJ: NowCoder
Contest name: 牛客 2022 年七夕节比赛
Rule: ICPC
Start time: 8/4/2022, 11:00:00
End time: 8/4/2022, 14:00:00
https://ac.nowcoder.com/acm/contest/38105

OJ: Codeforces
Contest name: Educational Codeforces Round 133 (Rated for Div. 2)
Rule: ICPC
Start time: 8/4/2022, 14:35:00
End time: 8/4/2022, 16:35:00
https://codeforces.com/contests/1716

OJ: NowCoder
Contest name: 长沙学院 2022 暑假训练赛（一）
Rule: ICPC
Start time: 8/5/2022, 01:00:00
End time: 8/5/2022, 05:30:00
https://ac.nowcoder.com/acm/contest/38762

OJ: NowCoder
Contest name: "蔚来杯"2022 牛客暑期多校训练营 6
Rule: ICPC
Start time: 8/6/2022, 04:00:00
End time: 8/6/2022, 09:00:00
https://ac.nowcoder.com/acm/contest/33191

OJ: Luogu
Contest name: 【LGR-115】洛谷 8 月月赛 I & 终末祭 REOI Round 1
Rule: IOI
Start time: 8/6/2022, 06:00:00
End time: 8/6/2022, 10:00:00
https://www.luogu.com.cn/contest/76483

OJ: AtCoder
Contest name: Ⓐ LINE  Verda Programming Contest（AtCoder Beginner Contest 263）
Rule: AtCoder
Start time: 8/6/2022, 12:00:00
End time: 8/6/2022, 13:40:00
https://atcoder.jp/contests/abc263

OJ: LeetCode
Contest name: Biweekly Contest 84
Rule: AtCoder
Start time: 8/6/2022, 14:30:00
End time: 8/6/2022, 16:00:00
https://leetcode.com/contest/biweekly-contest-84

OJ: Codeforces
Contest name: Codeforces Round #812 (Div. 2)
Rule: Codeforces
Start time: 8/6/2022, 14:35:00
End time: 8/6/2022, 16:35:00
https://codeforces.com/contests/1713

OJ: LeetCode
Contest name: Weekly Contest 305
Rule: AtCoder
Start time: 8/7/2022, 02:30:00
End time: 8/7/2022, 04:00:00
https://leetcode.com/contest/weekly-contest-305

OJ: NowCoder
Contest name: &ldquo; 科林明伦杯 & rdquo; 哈尔滨理工大学暑假训练赛
Rule: ICPC
Start time: 8/7/2022, 05:00:00
End time: 8/7/2022, 09:00:00
https://ac.nowcoder.com/acm/contest/37895

OJ: Luogu
Contest name: 【LGR-116】洛谷 8 月入门赛 & AyaOI Round 1
Rule: ICPC
Start time: 8/7/2022, 06:00:00
End time: 8/7/2022, 09:00:00
https://www.luogu.com.cn/contest/76791
```

</details>

<details>
<summary> <code>> lsct -o at cf -d 7 -L en</code> </summary>

```text
There are no running contests on AtCoder,Codeforces

There are 4 contests on Codeforces,AtCoder in the next 7 days

OJ: Codeforces
Contest name: Educational Codeforces Round 133 (Rated for Div. 2)
Rule: ICPC
Start time: 8/4/2022, 14:35:00
End time: 8/4/2022, 16:35:00
https://codeforces.com/contests/1716

OJ: AtCoder
Contest name: Ⓐ LINE  Verda Programming Contest（AtCoder Beginner Contest 263）
Rule: AtCoder
Start time: 8/6/2022, 12:00:00
End time: 8/6/2022, 13:40:00
https://atcoder.jp/contests/abc263

OJ: Codeforces
Contest name: Codeforces Round #812 (Div. 2)
Rule: Codeforces
Start time: 8/6/2022, 14:35:00
End time: 8/6/2022, 16:35:00
https://codeforces.com/contests/1713

OJ: AtCoder
Contest name: Ⓗ RECRUIT Nihonbashi Half Marathon 2022 Summer（AHC013）
Rule: AtCoder
Start time: 8/9/2022, 12:00:00
End time: 8/16/2022, 12:00:00
https://atcoder.jp/contests/ahc013
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
      "name": "Ⓐ LINE  Verda Programming Contest（AtCoder Beginner Contest 263）",
      "rule": "AtCoder",
      "startTime": "2022-08-06T12:00:00.000Z",
      "endTime": "2022-08-06T13:40:00.000Z",
      "url": "https://atcoder.jp/contests/abc263"
    },
    {
      "ojName": "AtCoder",
      "name": "Ⓗ RECRUIT Nihonbashi Half Marathon 2022 Summer（AHC013）",
      "rule": "AtCoder",
      "startTime": "2022-08-09T12:00:00.000Z",
      "endTime": "2022-08-16T12:00:00.000Z",
      "url": "https://atcoder.jp/contests/ahc013"
    },
    {
      "ojName": "AtCoder",
      "name": "Ⓐ freee Programming Contest 2022（AtCoder Beginner Contest 264）",
      "rule": "AtCoder",
      "startTime": "2022-08-13T12:00:00.000Z",
      "endTime": "2022-08-13T13:40:00.000Z",
      "url": "https://atcoder.jp/contests/abc264"
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
      "ojName": "AtCoder",
      "name": "Ⓐ AtCoder Beginner Contest 265",
      "rule": "AtCoder",
      "startTime": "2022-08-20T12:00:00.000Z",
      "endTime": "2022-08-20T13:40:00.000Z",
      "url": "https://atcoder.jp/contests/abc265"
    },
    {
      "ojName": "AtCoder",
      "name": "Ⓐ AtCoder Beginner Contest 266",
      "rule": "AtCoder",
      "startTime": "2022-08-27T12:00:00.000Z",
      "endTime": "2022-08-27T13:40:00.000Z",
      "url": "https://atcoder.jp/contests/abc266"
    },
    {
      "ojName": "AtCoder",
      "name": "Ⓗ 9th Asprova Programming Contest",
      "rule": "AtCoder",
      "startTime": "2022-08-28T01:00:00.000Z",
      "endTime": "2022-09-04T11:00:00.000Z",
      "url": "https://atcoder.jp/contests/asprocon9"
    },
    {
      "ojName": "Codeforces",
      "name": "Educational Codeforces Round 133 (Rated for Div. 2)",
      "rule": "ICPC",
      "startTime": "2022-08-04T14:35:00.000Z",
      "endTime": "2022-08-04T16:35:00.000Z",
      "url": "https://codeforces.com/contests/1716"
    },
    {
      "ojName": "Codeforces",
      "name": "Codeforces Round #812 (Div. 2)",
      "rule": "Codeforces",
      "startTime": "2022-08-06T14:35:00.000Z",
      "endTime": "2022-08-06T16:35:00.000Z",
      "url": "https://codeforces.com/contests/1713"
    },
    {
      "ojName": "Codeforces",
      "name": "Codeforces Round (Div. 2)",
      "rule": "Codeforces",
      "startTime": "2022-08-13T14:35:00.000Z",
      "endTime": "2022-08-13T16:35:00.000Z",
      "url": "https://codeforces.com/contests/1712"
    },
    {
      "ojName": "Codeforces",
      "name": "Codeforces Round (Div. 2)",
      "rule": "Codeforces",
      "startTime": "2022-08-20T14:35:00.000Z",
      "endTime": "2022-08-20T16:35:00.000Z",
      "url": "https://codeforces.com/contests/1715"
    },
    {
      "ojName": "Codeforces",
      "name": "Codeforces Round (Div. 2)",
      "rule": "Codeforces",
      "startTime": "2022-09-02T14:35:00.000Z",
      "endTime": "2022-09-02T16:35:00.000Z",
      "url": "https://codeforces.com/contests/1717"
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
