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

多少整几个活：

<!-- block_cli begin -->
（*下面这些是高 [semantic-release](https://github.com/semantic-release/semantic-release) 搁 Sat, 29 Oct 2022 17:43:25 GMT 自个生成的*）

<details>
<summary> <code>> lsct -L zh-NE</code> </summary>

```text
搁 Luogu 上有 2 场比赛正偷摸干着呢

搁哪: Luogu
叫啥: CSP-J 2022 自测
咋个整法: IOI
啥前开始: 10/29/2022, 04:30:00
多前完事: 11/5/2022, 14:00:00
https://www.luogu.com.cn/contest/90215

搁哪: Luogu
叫啥: CSP-S 2022 自测
咋个整法: IOI
啥前开始: 10/29/2022, 10:45:00
多前完事: 11/5/2022, 14:00:00
https://www.luogu.com.cn/contest/90216

之后 3 天搁 LeetCode,AtCoder 上拢共 2 场比赛

搁哪: LeetCode
叫啥: Weekly Contest 317
咋个整法: AtCoder
啥前开始: 10/30/2022, 02:30:00
多前完事: 10/30/2022, 04:00:00
https://leetcode.com/contest/weekly-contest-317

搁哪: AtCoder
叫啥: Ⓗ TOYOTA MOTOR CORPORATION Programming Contest 2022（AtCoder Heuristic Contest 015）
咋个整法: AtCoder
啥前开始: 10/30/2022, 06:00:00
多前完事: 10/30/2022, 10:00:00
https://atcoder.jp/contests/ahc015
```

</details>

<details>
<summary> <code>> lsct -o at cf -d 7 -L zh-NE</code> </summary>

```text
这前搁 AtCoder,Codeforces 上属实是没比赛打

之后 7 天搁 AtCoder,Codeforces 上拢共 3 场比赛

搁哪: AtCoder
叫啥: Ⓗ TOYOTA MOTOR CORPORATION Programming Contest 2022（AtCoder Heuristic Contest 015）
咋个整法: AtCoder
啥前开始: 10/30/2022, 06:00:00
多前完事: 10/30/2022, 10:00:00
https://atcoder.jp/contests/ahc015

搁哪: Codeforces
叫啥: Codeforces Round (Div. 2)
咋个整法: Codeforces
啥前开始: 11/4/2022, 14:35:00
多前完事: 11/4/2022, 16:35:00
https://codeforces.com/contests/1747

搁哪: AtCoder
叫啥: Ⓐ AtCoder Beginner Contest 276
咋个整法: AtCoder
啥前开始: 11/5/2022, 12:00:00
多前完事: 11/5/2022, 13:40:00
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

想要更全乎的 API 文档，上 <https://lsct.stagoh.com> 瞅瞅去。

你要是想搁你项目里用 *lscontests* 整比赛信息用，或者说是你嫌和支持的 OJ 少想自个加几个，那你就得调 API 了：

#### 就要纯字的

```typescript
import lsct from "lscontests";

new lsct({ abbrList: ["cf", "lg"] }).getContestsText().then(console.log);
```

输出跟 `lsct -o cf lg` 是一样式的。

#### 要个列表回来

```typescript
import lsct from "lscontests";

new lsct({ abbrList: ["cf", "lg"] }).getContests().then(console.log);
```

输出跟 `lsct -r --no-sort` 是一样式的。

#### 自个添加对其他 OJ 的支持

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
    console.log(await new lsct({ abbrList: ["cf", "ts"], days: 1 }).getContestsText("zh-NE"));
    console.log();
    console.log(await new lsct({ abbrList: ["at", "ts"], days: 7 }).getContests());
}

main();
```

照上面那么整出来是这样式的：

```text
搁 testOJ 上有 1 场比赛正偷摸干着呢

搁哪: testOJ
叫啥: testContest
咋个整法: ICPC
啥前开始: 2022/6/10 21:46:40
多前完事: 2022/6/10 22:46:40
https://www.test.com

之后 1 天搁 Codeforces 上拢共 1 场比赛

搁哪: Codeforces
叫啥: Codeforces Round #798 (Div. 2)
咋个整法: Codeforces
啥前开始: 2022/6/11 00:35:00
多前完事: 2022/6/11 02:35:00
https://codeforces.com/contests/1689

{
  running: [
    {
      ojName: 'testOJ',
      name: 'testContest',
      rule: 'ICPC',
      startTime: 2022-06-10T13:46:42.917Z,
      endTime: 2022-06-10T14:46:42.918Z,
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

#### 照 CLI 那样式用

```typescript
import { cli } from "lscontests";

cli("-o cf -L en", undefined, console.log);
```

输出跟 `lsct -o cf -L en` 一样一样的。

## 用滴是这个开源许可证

[GPL-3.0](https://www.gnu.org/licenses/gpl-3.0.html)
