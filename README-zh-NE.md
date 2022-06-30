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
（*下面这些是高 [semantic-release](https://github.com/semantic-release/semantic-release) 搁 Thu, 30 Jun 2022 08:32:59 GMT 自个生成的*）

<details>
<summary> <code>> lsct -L zh-NE</code> </summary>

```text
这前搁 AtCoder,Codeforces,LeetCode,Luogu,NowCoder 上属实是没比赛打

之后 3 天搁 NowCoder,AtCoder,LeetCode 上拢共 4 场比赛

搁哪: NowCoder
叫啥：第 20 届上海大学程序设计联赛夏季赛（校外同步赛）
咋个整法: ICPC
啥前开始: 7/2/2022, 05:00:00
多前完事: 7/2/2022, 08:30:00
https://ac.nowcoder.com/acm/contest/36652

搁哪: AtCoder
叫啥: Ⓐ AtCoder Beginner Contest 258
咋个整法: AtCoder
啥前开始: 7/2/2022, 12:00:00
多前完事: 7/2/2022, 13:40:00
https://atcoder.jp/contests/abc258

搁哪: LeetCode
叫啥: Weekly Contest 300
咋个整法: AtCoder
啥前开始: 7/3/2022, 02:30:00
多前完事: 7/3/2022, 04:00:00
https://leetcode.com/contest/weekly-contest-300

搁哪: AtCoder
叫啥: Ⓗ AtCoder Heuristic Contest 012
咋个整法: AtCoder
啥前开始: 7/3/2022, 06:00:00
多前完事: 7/3/2022, 10:00:00
https://atcoder.jp/contests/ahc012
```

</details>

<details>
<summary> <code>> lsct -o at cf -d 7 -L zh-NE</code> </summary>

```text
这前搁 AtCoder,Codeforces 上属实是没比赛打

之后 7 天搁 AtCoder,Codeforces 上拢共 3 场比赛

搁哪: AtCoder
叫啥: Ⓐ AtCoder Beginner Contest 258
咋个整法: AtCoder
啥前开始: 7/2/2022, 12:00:00
多前完事: 7/2/2022, 13:40:00
https://atcoder.jp/contests/abc258

搁哪: AtCoder
叫啥: Ⓗ AtCoder Heuristic Contest 012
咋个整法: AtCoder
啥前开始: 7/3/2022, 06:00:00
多前完事: 7/3/2022, 10:00:00
https://atcoder.jp/contests/ahc012

搁哪: Codeforces
叫啥: Codeforces Round #804 (Div. 2)
咋个整法: Codeforces
啥前开始: 7/4/2022, 14:35:00
多前完事: 7/4/2022, 16:35:00
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
