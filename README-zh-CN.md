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

来欣赏一下它的表演：

<!-- block_cli begin -->
（*以下内容是使用 [semantic-release](https://github.com/semantic-release/semantic-release) 于 Thu, 26 May 2022 09:08:44 GMT 自动生成的*）

<details>
<summary> <code>> lsct </code> </summary>

```text
在 NowCoder 上有 1 场正在进行的比赛

比赛平台: NowCoder
比赛名称: 2022 图论班第一章图匹配例题与习题
赛制: ICPC
开始时间: 5/13/2022, 06:00:00
结束时间: 5/30/2022, 08:00:00
https://ac.nowcoder.com/acm/contest/34649

接下来的 3 天内在 NowCoder,AtCoder,LeetCode 上有 7 场比赛

比赛平台: NowCoder
比赛名称：牛客练习赛 99
赛制: ICPC
开始时间: 5/27/2022, 11:00:00
结束时间: 5/27/2022, 13:30:00
https://ac.nowcoder.com/acm/contest/34330

比赛平台: AtCoder
比赛名称: Ⓗ AtCoder Heuristic Contest 011
赛制: AtCoder
开始时间: 5/28/2022, 03:00:00
结束时间: 6/5/2022, 10:00:00
https://atcoder.jp/contests/ahc011

比赛平台: NowCoder
比赛名称: MINIEYE 杯第十六届华中科技大学程序设计邀请赛
赛制: ICPC
开始时间: 5/28/2022, 04:30:00
结束时间: 5/28/2022, 09:30:00
https://ac.nowcoder.com/acm/contest/34866

比赛平台: NowCoder
比赛名称：福建农林大学校赛（同步赛）
赛制: ICPC
开始时间: 5/28/2022, 05:30:00
结束时间: 5/28/2022, 09:30:00
https://ac.nowcoder.com/acm/contest/33869

比赛平台: AtCoder
比赛名称: Ⓐ NOMURA Programming Contest 2022（AtCoder Beginner Contest 253）
赛制: AtCoder
开始时间: 5/28/2022, 12:00:00
结束时间: 5/28/2022, 13:40:00
https://atcoder.jp/contests/abc253

比赛平台: LeetCode
比赛名称: Biweekly Contest 79
赛制: AtCoder
开始时间: 5/28/2022, 14:30:00
结束时间: 5/28/2022, 16:00:00
https://leetcode.com/contest/biweekly-contest-79

比赛平台: LeetCode
比赛名称: Weekly Contest 295
赛制: AtCoder
开始时间: 5/29/2022, 02:30:00
结束时间: 5/29/2022, 04:00:00
https://leetcode.com/contest/weekly-contest-295
```

</details>

<details>
<summary> <code>> lsct -o at cf -d 7</code> </summary>

```text
没有正在进行的比赛捏

接下来的 7 天内在 AtCoder,Codeforces 上有 4 场比赛

比赛平台: AtCoder
比赛名称: Ⓗ AtCoder Heuristic Contest 011
赛制: AtCoder
开始时间: 5/28/2022, 03:00:00
结束时间: 6/5/2022, 10:00:00
https://atcoder.jp/contests/ahc011

比赛平台: AtCoder
比赛名称: Ⓐ NOMURA Programming Contest 2022（AtCoder Beginner Contest 253）
赛制: AtCoder
开始时间: 5/28/2022, 12:00:00
结束时间: 5/28/2022, 13:40:00
https://atcoder.jp/contests/abc253

比赛平台: AtCoder
比赛名称: Ⓐ AtCoder Regular Contest 141
赛制: AtCoder
开始时间: 5/29/2022, 12:00:00
结束时间: 5/29/2022, 14:00:00
https://atcoder.jp/contests/arc141

比赛平台: Codeforces
比赛名称: CodeCraft-22 and Codeforces Round #795 (Div. 2)
赛制: Codeforces
开始时间: 5/31/2022, 14:35:00
结束时间: 5/31/2022, 16:35:00
https://codeforces.com/contests/1691
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
    }
  ]
}
```

</details>
<!-- block_cli end -->

### API

更详细的 API 文档请访问 <https://lsct.agoh.xyz>。

如果你想要在你的项目中调用 *lscontests* 来获取比赛信息，或者你想要添加对其他 OJ 的支持，那么你可以像下面这样来调用 *lscontests*：

#### 获取比赛文本信息

```typescript
import { getContestInfo } from "lscontests";

getContestsInfoText({ abbrList: ["cf", "lg"] }).then(console.log);
```

这段代码的运行结果与 `lsct -o cf lg` 相同。

#### 获取比赛列表

```typescript
import { getContestList } from "lscontests";

getContests({ sort: false }).then(console.log);
```

这段代码的运行结果与 `lsct -r --no-sort` 相同。

#### 添加对其他 OJ 的支持

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

这段代码的运行结果如下：

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

#### 像使用 CLI 一样

```typescript
import { cli } from "lscontests";

cli("-o cf -L en").then(console.log);
```

这段代码的运行结果与 `lsct -o cf -L en` 相同。

## 许可证

[GPL-3.0](https://www.gnu.org/licenses/gpl-3.0.html)
