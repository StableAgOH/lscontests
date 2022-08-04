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
（*下面这些是高 [semantic-release](https://github.com/semantic-release/semantic-release) 搁 Thu, 04 Aug 2022 07:30:19 GMT 自个生成的*）

<details>
<summary> <code>> lsct -L zh-NE</code> </summary>

```text
这前搁 AtCoder,Codeforces,LeetCode,Luogu,NowCoder 上属实是没比赛打

之后 3 天搁 NowCoder,Codeforces,Luogu,AtCoder,LeetCode 上拢共 11 场比赛

搁哪: NowCoder
叫啥：牛客 2022 年七夕节比赛
咋个整法: ICPC
啥前开始: 8/4/2022, 11:00:00
多前完事: 8/4/2022, 14:00:00
https://ac.nowcoder.com/acm/contest/38105

搁哪: Codeforces
叫啥: Educational Codeforces Round 133 (Rated for Div. 2)
咋个整法: ICPC
啥前开始: 8/4/2022, 14:35:00
多前完事: 8/4/2022, 16:35:00
https://codeforces.com/contests/1716

搁哪: NowCoder
叫啥：长沙学院 2022 暑假训练赛（一）
咋个整法: ICPC
啥前开始: 8/5/2022, 01:00:00
多前完事: 8/5/2022, 05:30:00
https://ac.nowcoder.com/acm/contest/38762

搁哪: NowCoder
叫啥: "蔚来杯"2022 牛客暑期多校训练营 6
咋个整法: ICPC
啥前开始: 8/6/2022, 04:00:00
多前完事: 8/6/2022, 09:00:00
https://ac.nowcoder.com/acm/contest/33191

搁哪: Luogu
叫啥: 【LGR-115】洛谷 8 月月赛 I & 终末祭 REOI Round 1
咋个整法: IOI
啥前开始: 8/6/2022, 06:00:00
多前完事: 8/6/2022, 10:00:00
https://www.luogu.com.cn/contest/76483

搁哪: AtCoder
叫啥: Ⓐ LINE  Verda Programming Contest（AtCoder Beginner Contest 263）
咋个整法: AtCoder
啥前开始: 8/6/2022, 12:00:00
多前完事: 8/6/2022, 13:40:00
https://atcoder.jp/contests/abc263

搁哪: LeetCode
叫啥: Biweekly Contest 84
咋个整法: AtCoder
啥前开始: 8/6/2022, 14:30:00
多前完事: 8/6/2022, 16:00:00
https://leetcode.com/contest/biweekly-contest-84

搁哪: Codeforces
叫啥: Codeforces Round #812 (Div. 2)
咋个整法: Codeforces
啥前开始: 8/6/2022, 14:35:00
多前完事: 8/6/2022, 16:35:00
https://codeforces.com/contests/1713

搁哪: LeetCode
叫啥: Weekly Contest 305
咋个整法: AtCoder
啥前开始: 8/7/2022, 02:30:00
多前完事: 8/7/2022, 04:00:00
https://leetcode.com/contest/weekly-contest-305

搁哪: NowCoder
叫啥: &ldquo; 科林明伦杯 & rdquo; 哈尔滨理工大学暑假训练赛
咋个整法: ICPC
啥前开始: 8/7/2022, 05:00:00
多前完事: 8/7/2022, 09:00:00
https://ac.nowcoder.com/acm/contest/37895

搁哪: Luogu
叫啥: 【LGR-116】洛谷 8 月入门赛 & AyaOI Round 1
咋个整法: ICPC
啥前开始: 8/7/2022, 06:00:00
多前完事: 8/7/2022, 09:00:00
https://www.luogu.com.cn/contest/76791
```

</details>

<details>
<summary> <code>> lsct -o at cf -d 7 -L zh-NE</code> </summary>

```text
这前搁 AtCoder,Codeforces 上属实是没比赛打

之后 7 天搁 Codeforces,AtCoder 上拢共 4 场比赛

搁哪: Codeforces
叫啥: Educational Codeforces Round 133 (Rated for Div. 2)
咋个整法: ICPC
啥前开始: 8/4/2022, 14:35:00
多前完事: 8/4/2022, 16:35:00
https://codeforces.com/contests/1716

搁哪: AtCoder
叫啥: Ⓐ LINE  Verda Programming Contest（AtCoder Beginner Contest 263）
咋个整法: AtCoder
啥前开始: 8/6/2022, 12:00:00
多前完事: 8/6/2022, 13:40:00
https://atcoder.jp/contests/abc263

搁哪: Codeforces
叫啥: Codeforces Round #812 (Div. 2)
咋个整法: Codeforces
啥前开始: 8/6/2022, 14:35:00
多前完事: 8/6/2022, 16:35:00
https://codeforces.com/contests/1713

搁哪: AtCoder
叫啥: Ⓗ RECRUIT Nihonbashi Half Marathon 2022 Summer（AHC013）
咋个整法: AtCoder
啥前开始: 8/9/2022, 12:00:00
多前完事: 8/16/2022, 12:00:00
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
