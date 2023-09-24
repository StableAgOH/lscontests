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
  -L, --language <lang>  set output language (choices: "en", "zh-CN", "zh-TW",
                         default: "zh-CN")
  --no-sort              do not sort by contests start time, but by OJ order
  --no-running           do not list all running contests
  --no-upcoming          do not list all upcoming contests
  -h, --help             display help for command
```
<!-- block_help end -->

It performs as follows:

<!-- block_cli begin -->
(*The following content was automatically generated using [semantic-release](https://github.com/semantic-release/semantic-release) on Sun, 24 Sep 2023 07:10:27 GMT*)

<details>
<summary> <code>> lsct -L en</code> </summary>

```text
There are 2 contests is running on Luogu,AtCoder

OJ: Luogu
Contest name: [ICPC2021 Macao R] ICPC2021 区域赛澳门站重现赛
Rule: ICPC
Start time: 9/24/2023, 05:00:00
End time: 9/24/2023, 10:00:00
https://www.luogu.com.cn/contest/134300

OJ: AtCoder
Contest name: Ⓗ  Marubeni Programming Contest 2023 (AtCoder Heuristic Contest 024)
Rule: AtCoder
Start time: 9/24/2023, 06:00:00
End time: 9/24/2023, 10:00:00
https://atcoder.jp/contests/ahc024

There are 4 contests on NowCoder,Codeforces in the next 3 days

OJ: NowCoder
Contest name: 牛客周赛 Round 13
Rule: IOI
Start time: 9/24/2023, 11:00:00
End time: 9/24/2023, 12:30:00
https://ac.nowcoder.com/acm/contest/65507

OJ: Codeforces
Contest name: Educational Codeforces Round 155 (Rated for Div. 2)
Rule: ICPC
Start time: 9/24/2023, 14:35:00
End time: 9/24/2023, 16:35:00
https://codeforces.com/contests/1879

OJ: Codeforces
Contest name: Codeforces Round 899 (Div. 2)
Rule: Codeforces
Start time: 9/25/2023, 14:35:00
End time: 9/25/2023, 16:35:00
https://codeforces.com/contests/1882

OJ: Codeforces
Contest name: Codeforces Round 900 (Div. 3)
Rule: ICPC
Start time: 9/26/2023, 14:35:00
End time: 9/26/2023, 16:50:00
https://codeforces.com/contests/1878
```

</details>

<details>
<summary> <code>> lsct -o at cf -d 7 -L en</code> </summary>

```text
There are 1 contests is running on AtCoder

OJ: AtCoder
Contest name: Ⓗ  Marubeni Programming Contest 2023 (AtCoder Heuristic Contest 024)
Rule: AtCoder
Start time: 9/24/2023, 06:00:00
End time: 9/24/2023, 10:00:00
https://atcoder.jp/contests/ahc024

There are 6 contests on Codeforces,AtCoder in the next 7 days

OJ: Codeforces
Contest name: Educational Codeforces Round 155 (Rated for Div. 2)
Rule: ICPC
Start time: 9/24/2023, 14:35:00
End time: 9/24/2023, 16:35:00
https://codeforces.com/contests/1879

OJ: Codeforces
Contest name: Codeforces Round 899 (Div. 2)
Rule: Codeforces
Start time: 9/25/2023, 14:35:00
End time: 9/25/2023, 16:35:00
https://codeforces.com/contests/1882

OJ: Codeforces
Contest name: Codeforces Round 900 (Div. 3)
Rule: ICPC
Start time: 9/26/2023, 14:35:00
End time: 9/26/2023, 16:50:00
https://codeforces.com/contests/1878

OJ: AtCoder
Contest name: Ⓐ AtCoder Beginner Contest 322
Rule: AtCoder
Start time: 9/30/2023, 12:00:00
End time: 9/30/2023, 13:40:00
https://atcoder.jp/contests/abc322

OJ: Codeforces
Contest name: Codeforces Round 901 (Div. 1)
Rule: Codeforces
Start time: 9/30/2023, 14:35:00
End time: 9/30/2023, 17:35:00
https://codeforces.com/contests/1874

OJ: Codeforces
Contest name: Codeforces Round 901 (Div. 2)
Rule: Codeforces
Start time: 9/30/2023, 14:35:00
End time: 9/30/2023, 17:35:00
https://codeforces.com/contests/1875
```

</details>

<details>
<summary> <code>> lsct -o at cf -d -1 -r --no-sort</code> </summary>

```json
{
  "running": [
    {
      "ojName": "AtCoder",
      "name": "Ⓗ  Marubeni Programming Contest 2023 (AtCoder Heuristic Contest 024)",
      "rule": "AtCoder",
      "startTime": "2023-09-24T06:00:00.000Z",
      "endTime": "2023-09-24T10:00:00.000Z",
      "url": "https://atcoder.jp/contests/ahc024"
    }
  ],
  "upcoming": [
    {
      "ojName": "AtCoder",
      "name": "Ⓐ AtCoder Beginner Contest 322",
      "rule": "AtCoder",
      "startTime": "2023-09-30T12:00:00.000Z",
      "endTime": "2023-09-30T13:40:00.000Z",
      "url": "https://atcoder.jp/contests/abc322"
    },
    {
      "ojName": "AtCoder",
      "name": "Ⓐ UNIQUE VISION Programming Contest 2023 Autumn(AtCoder Beginner Contest 323)",
      "rule": "AtCoder",
      "startTime": "2023-10-07T12:00:00.000Z",
      "endTime": "2023-10-07T13:40:00.000Z",
      "url": "https://atcoder.jp/contests/abc323"
    },
    {
      "ojName": "AtCoder",
      "name": "Ⓐ AtCoder Regular Contest 166",
      "rule": "AtCoder",
      "startTime": "2023-10-08T12:00:00.000Z",
      "endTime": "2023-10-08T14:00:00.000Z",
      "url": "https://atcoder.jp/contests/arc166"
    },
    {
      "ojName": "AtCoder",
      "name": "Ⓗ AtCoder Heuristic Contest 025",
      "rule": "AtCoder",
      "startTime": "2023-10-14T03:00:00.000Z",
      "endTime": "2023-10-22T10:00:00.000Z",
      "url": "https://atcoder.jp/contests/ahc025"
    },
    {
      "ojName": "AtCoder",
      "name": "Ⓐ Japan Registry Services (JPRS) Programming Contest 2023 (AtCoder Beginner Contest 324)",
      "rule": "AtCoder",
      "startTime": "2023-10-14T12:00:00.000Z",
      "endTime": "2023-10-14T13:40:00.000Z",
      "url": "https://atcoder.jp/contests/abc324"
    },
    {
      "ojName": "AtCoder",
      "name": "Ⓐ AtCoder Regular Contest 167",
      "rule": "AtCoder",
      "startTime": "2023-10-15T12:00:00.000Z",
      "endTime": "2023-10-15T14:00:00.000Z",
      "url": "https://atcoder.jp/contests/arc167"
    },
    {
      "ojName": "AtCoder",
      "name": "Ⓐ Panasonic Programming Contest 2023（AtCoder Beginner Contest 326）",
      "rule": "AtCoder",
      "startTime": "2023-10-28T12:00:00.000Z",
      "endTime": "2023-10-28T13:40:00.000Z",
      "url": "https://atcoder.jp/contests/abc326"
    },
    {
      "ojName": "Codeforces",
      "name": "Educational Codeforces Round 155 (Rated for Div. 2)",
      "rule": "ICPC",
      "startTime": "2023-09-24T14:35:00.000Z",
      "endTime": "2023-09-24T16:35:00.000Z",
      "url": "https://codeforces.com/contests/1879"
    },
    {
      "ojName": "Codeforces",
      "name": "Codeforces Round 899 (Div. 2)",
      "rule": "Codeforces",
      "startTime": "2023-09-25T14:35:00.000Z",
      "endTime": "2023-09-25T16:35:00.000Z",
      "url": "https://codeforces.com/contests/1882"
    },
    {
      "ojName": "Codeforces",
      "name": "Codeforces Round 900 (Div. 3)",
      "rule": "ICPC",
      "startTime": "2023-09-26T14:35:00.000Z",
      "endTime": "2023-09-26T16:50:00.000Z",
      "url": "https://codeforces.com/contests/1878"
    },
    {
      "ojName": "Codeforces",
      "name": "Codeforces Round 901 (Div. 1)",
      "rule": "Codeforces",
      "startTime": "2023-09-30T14:35:00.000Z",
      "endTime": "2023-09-30T17:35:00.000Z",
      "url": "https://codeforces.com/contests/1874"
    },
    {
      "ojName": "Codeforces",
      "name": "Codeforces Round 901 (Div. 2)",
      "rule": "Codeforces",
      "startTime": "2023-09-30T14:35:00.000Z",
      "endTime": "2023-09-30T17:35:00.000Z",
      "url": "https://codeforces.com/contests/1875"
    },
    {
      "ojName": "Codeforces",
      "name": "Codeforces Round (Div. 1)",
      "rule": "Codeforces",
      "startTime": "2023-10-08T09:05:00.000Z",
      "endTime": "2023-10-08T11:35:00.000Z",
      "url": "https://codeforces.com/contests/1876"
    },
    {
      "ojName": "Codeforces",
      "name": "Codeforces Round (Div. 2)",
      "rule": "Codeforces",
      "startTime": "2023-10-08T09:05:00.000Z",
      "endTime": "2023-10-08T11:35:00.000Z",
      "url": "https://codeforces.com/contests/1877"
    },
    {
      "ojName": "Codeforces",
      "name": "Codeforces Round (Div. 3)",
      "rule": "ICPC",
      "startTime": "2023-10-12T14:35:00.000Z",
      "endTime": "2023-10-12T16:50:00.000Z",
      "url": "https://codeforces.com/contests/1881"
    },
    {
      "ojName": "Codeforces",
      "name": "Codeforces Round (Div. 3)",
      "rule": "ICPC",
      "startTime": "2023-10-22T12:05:00.000Z",
      "endTime": "2023-10-22T14:20:00.000Z",
      "url": "https://codeforces.com/contests/1883"
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
