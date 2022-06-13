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
  -d, --days, <day>      number of days to display, set to 0 to get all
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
(*The following content was automatically generated using [semantic-release](https://github.com/semantic-release/semantic-release) on Mon, 13 Jun 2022 05:05:09 GMT*)

<details>
<summary> <code>> lsct -L en</code> </summary>

```text
There are 1 contests is running on NowCoder

OJ: NowCoder
Contest name: 牛客竞赛计算几何专题班扫描线
Rule: ICPC
Start time: 6/6/2022, 07:00:00
End time: 6/30/2022, 08:00:00
https://ac.nowcoder.com/acm/contest/36088

There are 1 contests on Codeforces in the next 3 days

OJ: Codeforces
Contest name: Codeforces Round #799 (Div. 4)
Rule: ICPC
Start time: 6/14/2022, 14:35:00
End time: 6/14/2022, 16:50:00
https://codeforces.com/contests/1692
```

</details>

<details>
<summary> <code>> lsct -o at cf -d 7 -L en</code> </summary>

```text
There are no running contests on AtCoder,Codeforces

There are 6 contests on Codeforces,AtCoder in the next 7 days

OJ: Codeforces
Contest name: Codeforces Round #799 (Div. 4)
Rule: ICPC
Start time: 6/14/2022, 14:35:00
End time: 6/14/2022, 16:50:00
https://codeforces.com/contests/1692

OJ: Codeforces
Contest name: Codeforces Round #800 (Div. 1)
Rule: Codeforces
Start time: 6/16/2022, 14:35:00
End time: 6/16/2022, 16:35:00
https://codeforces.com/contests/1693

OJ: Codeforces
Contest name: Codeforces Round #800 (Div. 2)
Rule: Codeforces
Start time: 6/16/2022, 14:35:00
End time: 6/16/2022, 16:35:00
https://codeforces.com/contests/1694

OJ: AtCoder
Contest name: Ⓐ Tokio Marine & Nichido Fire Insurance Programming Contest 2022（AtCoder Beginner Contest 256)
Rule: AtCoder
Start time: 6/18/2022, 12:00:00
End time: 6/18/2022, 13:40:00
https://atcoder.jp/contests/abc256

OJ: Codeforces
Contest name: Codeforces Round #TBA (Div. 2)
Rule: Codeforces
Start time: 6/18/2022, 14:35:00
End time: 6/18/2022, 16:35:00
https://codeforces.com/contests/1695

OJ: AtCoder
Contest name: Ⓐ AtCoder Regular Contest 142
Rule: AtCoder
Start time: 6/19/2022, 12:00:00
End time: 6/19/2022, 14:00:00
https://atcoder.jp/contests/arc142
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
      "name": "Ⓐ Tokio Marine & Nichido Fire Insurance Programming Contest 2022（AtCoder Beginner Contest 256)",
      "rule": "AtCoder",
      "startTime": "2022-06-18T12:00:00.000Z",
      "endTime": "2022-06-18T13:40:00.000Z",
      "url": "https://atcoder.jp/contests/abc256"
    },
    {
      "ojName": "AtCoder",
      "name": "Ⓐ AtCoder Regular Contest 142",
      "rule": "AtCoder",
      "startTime": "2022-06-19T12:00:00.000Z",
      "endTime": "2022-06-19T14:00:00.000Z",
      "url": "https://atcoder.jp/contests/arc142"
    },
    {
      "ojName": "AtCoder",
      "name": "Ⓐ NS Solutions Corporation Programming Contest 2022（AtCoder Beginner Contest 257）",
      "rule": "AtCoder",
      "startTime": "2022-06-25T12:00:00.000Z",
      "endTime": "2022-06-25T13:40:00.000Z",
      "url": "https://atcoder.jp/contests/abc257"
    },
    {
      "ojName": "AtCoder",
      "name": "Ⓐ AtCoder Regular Contest 143",
      "rule": "AtCoder",
      "startTime": "2022-06-26T12:00:00.000Z",
      "endTime": "2022-06-26T14:00:00.000Z",
      "url": "https://atcoder.jp/contests/arc143"
    },
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
      "ojName": "Codeforces",
      "name": "Codeforces Round #799 (Div. 4)",
      "rule": "ICPC",
      "startTime": "2022-06-14T14:35:00.000Z",
      "endTime": "2022-06-14T16:50:00.000Z",
      "url": "https://codeforces.com/contests/1692"
    },
    {
      "ojName": "Codeforces",
      "name": "Codeforces Round #800 (Div. 1)",
      "rule": "Codeforces",
      "startTime": "2022-06-16T14:35:00.000Z",
      "endTime": "2022-06-16T16:35:00.000Z",
      "url": "https://codeforces.com/contests/1693"
    },
    {
      "ojName": "Codeforces",
      "name": "Codeforces Round #800 (Div. 2)",
      "rule": "Codeforces",
      "startTime": "2022-06-16T14:35:00.000Z",
      "endTime": "2022-06-16T16:35:00.000Z",
      "url": "https://codeforces.com/contests/1694"
    },
    {
      "ojName": "Codeforces",
      "name": "Codeforces Round #TBA (Div. 2)",
      "rule": "Codeforces",
      "startTime": "2022-06-18T14:35:00.000Z",
      "endTime": "2022-06-18T16:35:00.000Z",
      "url": "https://codeforces.com/contests/1695"
    },
    {
      "ojName": "Codeforces",
      "name": "Codeforces Global Round 21",
      "rule": "Codeforces",
      "startTime": "2022-06-25T14:35:00.000Z",
      "endTime": "2022-06-25T16:35:00.000Z",
      "url": "https://codeforces.com/contests/1696"
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
