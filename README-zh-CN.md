# lscontests

[![GitHub Repo stars](https://img.shields.io/github/stars/StableAgOH/lscontests?style=social)](https://github.com/StableAgOH/lscontests)
[![GitHub commit activity](https://img.shields.io/github/commit-activity/m/StableAgOH/lscontests?logo=github)](https://github.com/StableAgOH/lscontests)
[![License](https://img.shields.io/github/license/StableAgOH/lscontests)](https://github.com/StableAgOH/lscontests)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

[![npm](https://img.shields.io/npm/v/lscontests?logo=npm)](https://www.npmjs.com/package/lscontests)
[![npm](https://img.shields.io/npm/dw/lscontests?logo=npm)](https://www.npmjs.com/package/lscontests)

一个用来获取各大 OJ 上比赛信息的工具。

[东北话文档](./README-zh-NE.md) | [English Document](./README.md)

## 如何安装

### 只想使用 CLI

如果你是 npm 用户: `npm install -g lscontests`

如果你是 yarn 用户: `yarn global add lscontests`

### 向你的包中添加 *lscontests*

如果你是 npm 用户: `npm install lscontests --save`

如果你是 yarn 用户: `yarn add lscontests`

## 如何使用

### CLI

你可以非常轻松地使用 CLI 来获取比赛信息。

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

来欣赏一下它的表演：

<!-- block_cli begin -->
（*以下内容是使用 [semantic-release](https://github.com/semantic-release/semantic-release) 于 Fri, 22 Jul 2022 05:49:39 GMT 自动生成的*）

<details>
<summary> <code>> lsct </code> </summary>

```text
在 AtCoder,Codeforces,LeetCode,Luogu,NowCoder 上没有正在进行的比赛捏

接下来的 3 天内在 Luogu,NowCoder,AtCoder,LeetCode,Codeforces 上有 10 场比赛

比赛平台: Luogu
比赛名称: FAOI-R1 & CSP 赛前信心赛
赛制: LeDuo
开始时间: 7/22/2022, 09:00:00
结束时间: 7/22/2022, 13:00:00
https://www.luogu.com.cn/contest/73362

比赛平台: NowCoder
比赛名称: "蔚来杯"2022 牛客暑期多校训练营 2
赛制: ICPC
开始时间: 7/23/2022, 04:00:00
结束时间: 7/23/2022, 09:00:00
https://ac.nowcoder.com/acm/contest/33187

比赛平台: Luogu
比赛名称: 「KDOI」Round 1
赛制: IOI
开始时间: 7/23/2022, 06:00:00
结束时间: 7/23/2022, 10:00:00
https://www.luogu.com.cn/contest/71146

比赛平台: AtCoder
比赛名称: Ⓐ AtCoder Beginner Contest 261
赛制: AtCoder
开始时间: 7/23/2022, 12:00:00
结束时间: 7/23/2022, 13:40:00
https://atcoder.jp/contests/abc261

比赛平台: LeetCode
比赛名称: Biweekly Contest 83
赛制: AtCoder
开始时间: 7/23/2022, 14:30:00
结束时间: 7/23/2022, 16:00:00
https://leetcode.com/contest/biweekly-contest-83

比赛平台: LeetCode
比赛名称: Weekly Contest 303
赛制: AtCoder
开始时间: 7/24/2022, 02:30:00
结束时间: 7/24/2022, 04:00:00
https://leetcode.com/contest/weekly-contest-303

比赛平台: NowCoder
比赛名称: 2022 河南萌新联赛第（三）场：河南大学
赛制: ICPC
开始时间: 7/24/2022, 05:00:00
结束时间: 7/24/2022, 09:00:00
https://ac.nowcoder.com/acm/contest/37782

比赛平台: Luogu
比赛名称: 【LGR-113】洛谷 7 月普及组月赛 & JROI R6
赛制: OI
开始时间: 7/24/2022, 06:00:00
结束时间: 7/24/2022, 09:30:00
https://www.luogu.com.cn/contest/65483

比赛平台: Codeforces
比赛名称: Codeforces Round #810 (Div. 1/2)
赛制: Codeforces
开始时间: 7/24/2022, 14:35:00
结束时间: 7/24/2022, 17:05:00
https://codeforces.com/contests/1710
https://codeforces.com/contests/1711

比赛平台: NowCoder
比赛名称: "蔚来杯"2022 牛客暑期多校训练营 3
赛制: ICPC
开始时间: 7/25/2022, 04:00:00
结束时间: 7/25/2022, 09:00:00
https://ac.nowcoder.com/acm/contest/33188
```

</details>

<details>
<summary> <code>> lsct -o at cf -d 7</code> </summary>

```text
在 AtCoder,Codeforces 上没有正在进行的比赛捏

接下来的 7 天内在 AtCoder,Codeforces 上有 2 场比赛

比赛平台: AtCoder
比赛名称: Ⓐ AtCoder Beginner Contest 261
赛制: AtCoder
开始时间: 7/23/2022, 12:00:00
结束时间: 7/23/2022, 13:40:00
https://atcoder.jp/contests/abc261

比赛平台: Codeforces
比赛名称: Codeforces Round #810 (Div. 1/2)
赛制: Codeforces
开始时间: 7/24/2022, 14:35:00
结束时间: 7/24/2022, 17:05:00
https://codeforces.com/contests/1710
https://codeforces.com/contests/1711
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
      "name": "Ⓐ AtCoder Beginner Contest 261",
      "rule": "AtCoder",
      "startTime": "2022-07-23T12:00:00.000Z",
      "endTime": "2022-07-23T13:40:00.000Z",
      "url": "https://atcoder.jp/contests/abc261"
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
      "name": "Ⓐ AtCoder Beginner Contest 262",
      "rule": "AtCoder",
      "startTime": "2022-07-31T12:00:00.000Z",
      "endTime": "2022-07-31T13:40:00.000Z",
      "url": "https://atcoder.jp/contests/abc262"
    },
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
      "name": "Codeforces Round #810 (Div. 1/2)",
      "ojName": "Codeforces",
      "rule": "Codeforces",
      "startTime": "2022-07-24T14:35:00.000Z",
      "endTime": "2022-07-24T17:05:00.000Z",
      "url": "https://codeforces.com/contests/1710\nhttps://codeforces.com/contests/1711"
    },
    {
      "ojName": "Codeforces",
      "name": "CodeTON Round 2 (Div. 1 + Div. 2, Rated, Prizes!)",
      "rule": "Codeforces",
      "startTime": "2022-07-31T14:05:00.000Z",
      "endTime": "2022-07-31T16:35:00.000Z",
      "url": "https://codeforces.com/contests/1704"
    },
    {
      "ojName": "Codeforces",
      "name": "Codeforces Round (Div. 2)",
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
    }
  ]
}
```

</details>
<!-- block_cli end -->

### API

更详细的 API 文档请访问 <https://lsct.stagoh.com>。

如果你想要在你的项目中调用 *lscontests* 来获取比赛信息，或者你想要添加对其他 OJ 的支持，那么你可以像下面这样来调用 *lscontests*：

#### 获取比赛文本信息

```typescript
import lsct from "lscontests";

new lsct({ abbrList: ["cf", "lg"] }).getContestsText().then(console.log);
```

这段代码的运行结果与 `lsct -o cf lg` 相同。

#### 获取比赛列表

```typescript
import lsct from "lscontests";

new lsct({ abbrList: ["cf", "lg"] }).getContests().then(console.log);
```

这段代码的运行结果与 `lsct -r --no-sort` 相同。

#### 添加对其他 OJ 的支持

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
    console.log(await new lsct({ abbrList: ["cf", "ts"], days: 1 }).getContestsText());
    console.log();
    console.log(await new lsct({ abbrList: ["at", "ts"], days: 7 }).getContests());
}

main();
```

这段代码的运行结果如下：

```text
在 testOJ 上有 1 场正在进行的比赛

比赛平台: testOJ
比赛名称: testContest
赛制: ICPC
开始时间: 2022/6/10 21:46:00
结束时间: 2022/6/10 22:46:00
https://www.test.com

接下来的 1 天内在 Codeforces 上有 1 场比赛

比赛平台: Codeforces
比赛名称: Codeforces Round #798 (Div. 2)
赛制: Codeforces
开始时间: 2022/6/11 00:35:00
结束时间: 2022/6/11 02:35:00
https://codeforces.com/contests/1689

{
  running: [
    {
      ojName: 'testOJ',
      name: 'testContest',
      rule: 'ICPC',
      startTime: 2022-06-10T13:46:03.113Z,
      endTime: 2022-06-10T14:46:03.114Z,
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

#### 像使用 CLI 一样

```typescript
import { cli } from "lscontests";

cli("-o cf -L en", undefined, console.log);
```

这段代码的运行结果与 `lsct -o cf -L en` 相同。

## 许可证

[GPL-3.0](https://www.gnu.org/licenses/gpl-3.0.html)
