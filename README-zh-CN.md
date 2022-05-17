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
  -d, --days, <day>      number of days to display (default: "3")
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
（*以下内容是使用 [semantic-release](https://github.com/semantic-release/semantic-release) 于 Sun, 15 May 2022 16:14:03 GMT 自动生成的*）

<details>
<summary> <code>> lsct </code> </summary>

```text
在 NowCoder 上有 2 场正在进行的比赛

比赛平台: NowCoder
比赛名称：牛客竞赛博弈专题班 Sprague-Grundy 函数（SG 函数、图游戏、Nim 和）
赛制: ICPC
开始时间: 5/13/2022, 04:00:00
结束时间: 5/21/2022, 13:00:00
https://ac.nowcoder.com/acm/contest/34655

比赛平台: NowCoder
比赛名称: 2022 图论班第一章图匹配例题与习题
赛制: ICPC
开始时间: 5/13/2022, 06:00:00
结束时间: 5/30/2022, 08:00:00
https://ac.nowcoder.com/acm/contest/34649

接下来的 3 天内没有比赛捏
```

</details>

<details>
<summary> <code>> lsct -o at cf -d 7</code> </summary>

```text
没有正在进行的比赛捏

接下来的 7 天内在 Codeforces,AtCoder 上有 4 场比赛

比赛平台: Codeforces
比赛名称: Codeforces Round #792 (Div. 1)
赛制: Codeforces
开始时间: 5/19/2022, 14:35:00
结束时间: 5/19/2022, 16:35:00
https://codeforces.com/contests/1683

比赛平台: Codeforces
比赛名称: Codeforces Round #792 (Div. 2)
赛制: Codeforces
开始时间: 5/19/2022, 14:35:00
结束时间: 5/19/2022, 16:35:00
https://codeforces.com/contests/1684

比赛平台: AtCoder
比赛名称: Ⓐ AtCoder Beginner Contest 252
赛制: AtCoder
开始时间: 5/21/2022, 12:00:00
结束时间: 5/21/2022, 13:40:00
https://atcoder.jp/contests/abc252

比赛平台: Codeforces
比赛名称: Codeforces Round #793 (Div. 2)
赛制: Codeforces
开始时间: 5/22/2022, 14:35:00
结束时间: 5/22/2022, 16:35:00
https://codeforces.com/contests/1682
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
      "name": "Ⓐ AtCoder Beginner Contest 252",
      "rule": "AtCoder",
      "startTime": "2022-05-21T12:00:00.000Z",
      "endTime": "2022-05-21T13:40:00.000Z",
      "url": "https://atcoder.jp/contests/abc252"
    },
    {
      "ojName": "Codeforces",
      "name": "Codeforces Round #793 (Div. 2)",
      "rule": "Codeforces",
      "startTime": "2022-05-22T14:35:00.000Z",
      "endTime": "2022-05-22T16:35:00.000Z",
      "url": "https://codeforces.com/contests/1682"
    },
    {
      "ojName": "Codeforces",
      "name": "Codeforces Round #792 (Div. 1)",
      "rule": "Codeforces",
      "startTime": "2022-05-19T14:35:00.000Z",
      "endTime": "2022-05-19T16:35:00.000Z",
      "url": "https://codeforces.com/contests/1683"
    },
    {
      "ojName": "Codeforces",
      "name": "Codeforces Round #792 (Div. 2)",
      "rule": "Codeforces",
      "startTime": "2022-05-19T14:35:00.000Z",
      "endTime": "2022-05-19T16:35:00.000Z",
      "url": "https://codeforces.com/contests/1684"
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