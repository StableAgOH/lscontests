# lscontests

[![GitHub Repo stars](https://img.shields.io/github/stars/StableAgOH/lscontests?style=social)](https://github.com/StableAgOH/lscontests)
[![GitHub commit activity](https://img.shields.io/github/commit-activity/m/StableAgOH/lscontests?logo=github)](https://github.com/StableAgOH/lscontests)
[![License](https://img.shields.io/github/license/StableAgOH/lscontests)](https://github.com/StableAgOH/lscontests)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

[![npm](https://img.shields.io/npm/v/lscontests?logo=npm)](https://www.npmjs.com/package/lscontests)
[![npm](https://img.shields.io/npm/dw/lscontests?logo=npm)](https://www.npmjs.com/package/lscontests)

瞅瞅最近有啥比赛。

[普通话文档](./README-zh-CN.md) | [English Document](./README.md)

## 咋装

### 就用 CLI

你要是用 npm 的那你就摁: `npm install -g lscontests`

你要是用 yarn 的那你就摁: `yarn global add lscontests`

### 往你项目里加个 *lscontests*

你要是用 npm 的那你就摁: `npm install lscontests --save`

你要是用 yarn 的那你就摁: `yarn add lscontests`

## 咋使

### CLI

用 CLI 咔咔两下你就能能(nèng)一堆比赛信息：

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

多少整几个活：

<!-- block_cli begin -->
（*下面这些是高 [semantic-release](https://github.com/semantic-release/semantic-release) 搁 Fri, 27 May 2022 15:42:41 GMT 自个生成的*）

<details>
<summary> <code>> lsct -L zh-NE</code> </summary>

```text
搁 NowCoder 上有 1 场比赛正偷摸干着呢

搁哪: NowCoder
叫啥: 2022 图论班第一章图匹配例题与习题
咋个整法: ICPC
啥前开始: 5/13/2022, 06:00:00
多前完事: 5/30/2022, 08:00:00
https://ac.nowcoder.com/acm/contest/34649

之后 3 天搁 AtCoder,NowCoder,LeetCode 上拢共 8 场比赛

搁哪: AtCoder
叫啥: Ⓗ AtCoder Heuristic Contest 011
咋个整法: AtCoder
啥前开始: 5/28/2022, 03:00:00
多前完事: 6/5/2022, 10:00:00
https://atcoder.jp/contests/ahc011

搁哪: NowCoder
叫啥: MINIEYE 杯第十六届华中科技大学程序设计邀请赛
咋个整法: ICPC
啥前开始: 5/28/2022, 04:30:00
多前完事: 5/28/2022, 09:30:00
https://ac.nowcoder.com/acm/contest/34866

搁哪: NowCoder
叫啥：福建农林大学校赛（同步赛）
咋个整法: ICPC
啥前开始: 5/28/2022, 05:30:00
多前完事: 5/28/2022, 09:30:00
https://ac.nowcoder.com/acm/contest/33869

搁哪: AtCoder
叫啥: Ⓐ NOMURA Programming Contest 2022（AtCoder Beginner Contest 253）
咋个整法: AtCoder
啥前开始: 5/28/2022, 12:00:00
多前完事: 5/28/2022, 13:40:00
https://atcoder.jp/contests/abc253

搁哪: LeetCode
叫啥: Biweekly Contest 79
咋个整法: AtCoder
啥前开始: 5/28/2022, 14:30:00
多前完事: 5/28/2022, 16:00:00
https://leetcode.com/contest/biweekly-contest-79

搁哪: LeetCode
叫啥: Weekly Contest 295
咋个整法: AtCoder
啥前开始: 5/29/2022, 02:30:00
多前完事: 5/29/2022, 04:00:00
https://leetcode.com/contest/weekly-contest-295

搁哪: NowCoder
叫啥：第四届 SCPC 中南民族大学程序设计竞赛（同步赛）
咋个整法: ICPC
啥前开始: 5/29/2022, 04:00:00
多前完事: 5/29/2022, 09:00:00
https://ac.nowcoder.com/acm/contest/35624

搁哪: AtCoder
叫啥: Ⓐ AtCoder Regular Contest 141
咋个整法: AtCoder
啥前开始: 5/29/2022, 12:00:00
多前完事: 5/29/2022, 14:00:00
https://atcoder.jp/contests/arc141
```

</details>

<details>
<summary> <code>> lsct -o at cf -d 7 -L zh-NE</code> </summary>

```text
这前属实是没比赛打

之后 7 天搁 AtCoder,Codeforces 上拢共 6 场比赛

搁哪: AtCoder
叫啥: Ⓗ AtCoder Heuristic Contest 011
咋个整法: AtCoder
啥前开始: 5/28/2022, 03:00:00
多前完事: 6/5/2022, 10:00:00
https://atcoder.jp/contests/ahc011

搁哪: AtCoder
叫啥: Ⓐ NOMURA Programming Contest 2022（AtCoder Beginner Contest 253）
咋个整法: AtCoder
啥前开始: 5/28/2022, 12:00:00
多前完事: 5/28/2022, 13:40:00
https://atcoder.jp/contests/abc253

搁哪: AtCoder
叫啥: Ⓐ AtCoder Regular Contest 141
咋个整法: AtCoder
啥前开始: 5/29/2022, 12:00:00
多前完事: 5/29/2022, 14:00:00
https://atcoder.jp/contests/arc141

搁哪: Codeforces
叫啥: CodeCraft-22 and Codeforces Round #795 (Div. 2)
咋个整法: Codeforces
啥前开始: 5/31/2022, 14:35:00
多前完事: 5/31/2022, 16:35:00
https://codeforces.com/contests/1691

搁哪: Codeforces
叫啥: Codeforces Round #796 (Div. 1)
咋个整法: Codeforces
啥前开始: 6/3/2022, 14:35:00
多前完事: 6/3/2022, 16:35:00
https://codeforces.com/contests/1687

搁哪: Codeforces
叫啥: Codeforces Round #796 (Div. 2)
咋个整法: Codeforces
啥前开始: 6/3/2022, 14:35:00
多前完事: 6/3/2022, 16:35:00
https://codeforces.com/contests/1688
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
      "name": "Ⓗ AtCoder Heuristic Contest 011",
      "rule": "AtCoder",
      "startTime": "2022-05-28T03:00:00.000Z",
      "endTime": "2022-06-05T10:00:00.000Z",
      "url": "https://atcoder.jp/contests/ahc011"
    },
    {
      "ojName": "AtCoder",
      "name": "Ⓐ NOMURA Programming Contest 2022（AtCoder Beginner Contest 253）",
      "rule": "AtCoder",
      "startTime": "2022-05-28T12:00:00.000Z",
      "endTime": "2022-05-28T13:40:00.000Z",
      "url": "https://atcoder.jp/contests/abc253"
    },
    {
      "ojName": "AtCoder",
      "name": "Ⓐ AtCoder Regular Contest 141",
      "rule": "AtCoder",
      "startTime": "2022-05-29T12:00:00.000Z",
      "endTime": "2022-05-29T14:00:00.000Z",
      "url": "https://atcoder.jp/contests/arc141"
    },
    {
      "ojName": "AtCoder",
      "name": "Ⓐ AtCoder Beginner Contest 254",
      "rule": "AtCoder",
      "startTime": "2022-06-04T12:00:00.000Z",
      "endTime": "2022-06-04T13:40:00.000Z",
      "url": "https://atcoder.jp/contests/abc254"
    },
    {
      "ojName": "AtCoder",
      "name": "Ⓐ Aising Programming Contest 2022（AtCoder Beginner Contest 255）",
      "rule": "AtCoder",
      "startTime": "2022-06-11T12:00:00.000Z",
      "endTime": "2022-06-11T13:40:00.000Z",
      "url": "https://atcoder.jp/contests/abc255"
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
      "name": "Ⓐ AtCoder Regular Contest 143",
      "rule": "AtCoder",
      "startTime": "2022-06-26T12:00:00.000Z",
      "endTime": "2022-06-26T14:00:00.000Z",
      "url": "https://atcoder.jp/contests/arc143"
    },
    {
      "ojName": "Codeforces",
      "name": "CodeCraft-22 and Codeforces Round #795 (Div. 2)",
      "rule": "Codeforces",
      "startTime": "2022-05-31T14:35:00.000Z",
      "endTime": "2022-05-31T16:35:00.000Z",
      "url": "https://codeforces.com/contests/1691"
    },
    {
      "ojName": "Codeforces",
      "name": "Codeforces Round #796 (Div. 1)",
      "rule": "Codeforces",
      "startTime": "2022-06-03T14:35:00.000Z",
      "endTime": "2022-06-03T16:35:00.000Z",
      "url": "https://codeforces.com/contests/1687"
    },
    {
      "ojName": "Codeforces",
      "name": "Codeforces Round #796 (Div. 2)",
      "rule": "Codeforces",
      "startTime": "2022-06-03T14:35:00.000Z",
      "endTime": "2022-06-03T16:35:00.000Z",
      "url": "https://codeforces.com/contests/1688"
    },
    {
      "ojName": "Codeforces",
      "name": "Codeforces Round #797 (Div. 3)",
      "rule": "ICPC",
      "startTime": "2022-06-07T14:35:00.000Z",
      "endTime": "2022-06-07T16:50:00.000Z",
      "url": "https://codeforces.com/contests/1690"
    },
    {
      "ojName": "Codeforces",
      "name": "Codeforces Round #798 (Div. 2)",
      "rule": "Codeforces",
      "startTime": "2022-06-10T16:35:00.000Z",
      "endTime": "2022-06-10T18:35:00.000Z",
      "url": "https://codeforces.com/contests/1689"
    },
    {
      "ojName": "Codeforces",
      "name": "Codeforces Round #799 (Div. 4)",
      "rule": "ICPC",
      "startTime": "2022-06-14T14:35:00.000Z",
      "endTime": "2022-06-14T16:50:00.000Z",
      "url": "https://codeforces.com/contests/1692"
    }
  ]
}
```

</details>
<!-- block_cli end -->

### API

想要更全乎的 API 文档，上 <https://lsct.stagoh.com> 瞅瞅去。

你要是想搁你项目里用 *lscontests* 整比赛信息用，或者说是你嫌和支持的 OJ 少想自个加几个，那你就得调 API 了：

#### 就要纯字的

```typescript
import { getContestInfo } from "lscontests";

getContestsInfoText({ abbrList: ["cf", "lg"] }).then(console.log);
```

输出跟 `lsct -o cf lg` 是一样式的。

#### 要个列表回来

```typescript
import { getContestList } from "lscontests";

getContests({ sort: false }).then(console.log);
```

输出跟 `lsct -r --no-sort` 是一样式的。

#### 自个添加对其他 OJ 的支持

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

照上面那么整出来是这样式的：

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

#### 跟用 CLI 一样

```typescript
import { cli } from "lscontests";

cli("-o cf -L en").then(console.log);
```

输出跟 `lsct -o cf -L en` 是一样式的。

## 用滴是这个开源许可证

[GPL-3.0](https://www.gnu.org/licenses/gpl-3.0.html)
