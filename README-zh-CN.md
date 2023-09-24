# lscontests

[![GitHub Repo stars](https://img.shields.io/github/stars/StableAgOH/lscontests?style=social)](https://github.com/StableAgOH/lscontests)
[![GitHub commit activity](https://img.shields.io/github/commit-activity/m/StableAgOH/lscontests?logo=github)](https://github.com/StableAgOH/lscontests)
[![License](https://img.shields.io/github/license/StableAgOH/lscontests)](https://github.com/StableAgOH/lscontests)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

[![npm](https://img.shields.io/npm/v/lscontests?logo=npm)](https://www.npmjs.com/package/lscontests)
[![npm](https://img.shields.io/npm/dw/lscontests?logo=npm)](https://www.npmjs.com/package/lscontests)

一个用来获取各大 OJ 上比赛信息的工具。

[English Document](./README.md)

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
  -L, --language <lang>  set output language (choices: "en", "zh-CN", "zh-TW",
                         default: "zh-CN")
  --no-sort              do not sort by contests start time, but by OJ order
  --no-running           do not list all running contests
  --no-upcoming          do not list all upcoming contests
  -h, --help             display help for command
```
<!-- block_help end -->

来欣赏一下它的表演：

<!-- block_cli begin -->
（*以下内容是使用 [semantic-release](https://github.com/semantic-release/semantic-release) 于 Sun, 24 Sep 2023 06:43:07 GMT 自动生成的*）

<details>
<summary> <code>> lsct </code> </summary>

```text
在 Luogu,AtCoder 上有 2 场正在进行的比赛

比赛平台: Luogu
比赛名称: [ICPC2021 Macao R] ICPC2021 区域赛澳门站重现赛
赛制: ICPC
开始时间: 9/24/2023, 05:00:00
结束时间: 9/24/2023, 10:00:00
https://www.luogu.com.cn/contest/134300

比赛平台: AtCoder
比赛名称: Ⓗ  Marubeni Programming Contest 2023 (AtCoder Heuristic Contest 024)
赛制: AtCoder
开始时间: 9/24/2023, 06:00:00
结束时间: 9/24/2023, 10:00:00
https://atcoder.jp/contests/ahc024

接下来的 3 天内在 NowCoder,Codeforces 上有 4 场比赛

比赛平台: NowCoder
比赛名称：牛客周赛 Round 13
赛制: IOI
开始时间: 9/24/2023, 11:00:00
结束时间: 9/24/2023, 12:30:00
https://ac.nowcoder.com/acm/contest/65507

比赛平台: Codeforces
比赛名称: Educational Codeforces Round 155 (Rated for Div. 2)
赛制: ICPC
开始时间: 9/24/2023, 14:35:00
结束时间: 9/24/2023, 16:35:00
https://codeforces.com/contests/1879

比赛平台: Codeforces
比赛名称: Codeforces Round 899 (Div. 2)
赛制: Codeforces
开始时间: 9/25/2023, 14:35:00
结束时间: 9/25/2023, 16:35:00
https://codeforces.com/contests/1882

比赛平台: Codeforces
比赛名称: Codeforces Round 900 (Div. 3)
赛制: ICPC
开始时间: 9/26/2023, 14:35:00
结束时间: 9/26/2023, 16:50:00
https://codeforces.com/contests/1878
```

</details>

<details>
<summary> <code>> lsct -o at cf -d 7</code> </summary>

```text
在 AtCoder 上有 1 场正在进行的比赛

比赛平台: AtCoder
比赛名称: Ⓗ  Marubeni Programming Contest 2023 (AtCoder Heuristic Contest 024)
赛制: AtCoder
开始时间: 9/24/2023, 06:00:00
结束时间: 9/24/2023, 10:00:00
https://atcoder.jp/contests/ahc024

接下来的 7 天内在 Codeforces,AtCoder 上有 6 场比赛

比赛平台: Codeforces
比赛名称: Educational Codeforces Round 155 (Rated for Div. 2)
赛制: ICPC
开始时间: 9/24/2023, 14:35:00
结束时间: 9/24/2023, 16:35:00
https://codeforces.com/contests/1879

比赛平台: Codeforces
比赛名称: Codeforces Round 899 (Div. 2)
赛制: Codeforces
开始时间: 9/25/2023, 14:35:00
结束时间: 9/25/2023, 16:35:00
https://codeforces.com/contests/1882

比赛平台: Codeforces
比赛名称: Codeforces Round 900 (Div. 3)
赛制: ICPC
开始时间: 9/26/2023, 14:35:00
结束时间: 9/26/2023, 16:50:00
https://codeforces.com/contests/1878

比赛平台: AtCoder
比赛名称: Ⓐ AtCoder Beginner Contest 322
赛制: AtCoder
开始时间: 9/30/2023, 12:00:00
结束时间: 9/30/2023, 13:40:00
https://atcoder.jp/contests/abc322

比赛平台: Codeforces
比赛名称: Codeforces Round 901 (Div. 1)
赛制: Codeforces
开始时间: 9/30/2023, 14:35:00
结束时间: 9/30/2023, 17:35:00
https://codeforces.com/contests/1874

比赛平台: Codeforces
比赛名称: Codeforces Round 901 (Div. 2)
赛制: Codeforces
开始时间: 9/30/2023, 14:35:00
结束时间: 9/30/2023, 17:35:00
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
