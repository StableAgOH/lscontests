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
（*下面这些是高 [semantic-release](https://github.com/semantic-release/semantic-release) 搁 Tue, 24 May 2022 15:51:23 GMT 自个生成的*）

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

之后 3 天搁 Codeforces,NowCoder 上拢共 3 场比赛

搁哪: Codeforces
叫啥: Codeforces Round #794 (Div. 1)
咋个整法: Codeforces
啥前开始: 5/25/2022, 17:35:00
多前完事: 5/25/2022, 19:50:00
https://codeforces.com/contests/1685

搁哪: Codeforces
叫啥: Codeforces Round #794 (Div. 2)
咋个整法: Codeforces
啥前开始: 5/25/2022, 17:35:00
多前完事: 5/25/2022, 19:50:00
https://codeforces.com/contests/1686

搁哪: NowCoder
叫啥：牛客练习赛 99
咋个整法: ICPC
啥前开始: 5/27/2022, 11:00:00
多前完事: 5/27/2022, 13:30:00
https://ac.nowcoder.com/acm/contest/34330
```

</details>

<details>
<summary> <code>> lsct -o at cf -d 7 -L zh-NE</code> </summary>

```text
这前属实是没比赛打

之后 7 天搁 Codeforces,AtCoder 上拢共 3 场比赛

搁哪: Codeforces
叫啥: Codeforces Round #794 (Div. 1)
咋个整法: Codeforces
啥前开始: 5/25/2022, 17:35:00
多前完事: 5/25/2022, 19:50:00
https://codeforces.com/contests/1685

搁哪: Codeforces
叫啥: Codeforces Round #794 (Div. 2)
咋个整法: Codeforces
啥前开始: 5/25/2022, 17:35:00
多前完事: 5/25/2022, 19:50:00
https://codeforces.com/contests/1686

搁哪: AtCoder
叫啥: Ⓗ AtCoder Heuristic Contest 011
咋个整法: AtCoder
啥前开始: 5/28/2022, 03:00:00
多前完事: 6/5/2022, 10:00:00
https://atcoder.jp/contests/ahc011
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
      "name": "Ⓗ AtCoder Heuristic Contest 011",
      "rule": "AtCoder",
      "startTime": "2022-05-28T03:00:00.000Z",
      "endTime": "2022-06-05T10:00:00.000Z",
      "url": "https://atcoder.jp/contests/ahc011"
    },
    {
      "ojName": "Codeforces",
      "name": "Codeforces Round #794 (Div. 1)",
      "rule": "Codeforces",
      "startTime": "2022-05-25T17:35:00.000Z",
      "endTime": "2022-05-25T19:50:00.000Z",
      "url": "https://codeforces.com/contests/1685"
    },
    {
      "ojName": "Codeforces",
      "name": "Codeforces Round #794 (Div. 2)",
      "rule": "Codeforces",
      "startTime": "2022-05-25T17:35:00.000Z",
      "endTime": "2022-05-25T19:50:00.000Z",
      "url": "https://codeforces.com/contests/1686"
    }
  ]
}
```

</details>
<!-- block_cli end -->

### API

想要更全乎的 API 文档，上 <https://lsct.agoh.xyz> 瞅瞅去。

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
