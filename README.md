# lscontests

![GitHub Repo stars](https://img.shields.io/github/stars/StableAgOH/lscontests?style=social)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/StableAgOH/lscontests)
![GitHub](https://img.shields.io/github/license/StableAgOH/lscontests)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

![npm](https://img.shields.io/npm/v/lscontests)
![npm](https://img.shields.io/npm/dw/lscontests)

A tool to get information about the contests on each OJ.

## Usage

### CLI

You can use cli to get a list of contests information easily.

```text
lsct [options]

Options:
  -V, --version          output the version number
  -d, --days, <day>      Number of days to get contests information (default: "3")
  -l, --list             List all supported OJ
  -o, --oj <ojs...>      OJs to get contests information (choices: "at", "cf", "lg", "nc")
  -r, --raw              Print raw contest list
  -L, --language <lang>  Set output language (choices: "en", "zh-CN", "zh-TW", default: "zh-CN")
  --no-sort              Do not sort by contests start time, but by OJ order
  -h, --help             display help for command
```

It performs as follows:

<details>
<summary> > lsct -o cf lg </summary>

```text
在最近的 3 天内有 2 场比赛


比赛平台: Codeforces
赛制: ICPC
开始时间: 2022/5/13 22:35:00
结束时间: 2022/5/14 00:35:00
https://codeforces.com/contests/1680


比赛平台: Luogu
赛制: IOI
开始时间: 2022/5/14 14:00:00
结束时间: 2022/5/14 18:00:00
https://www.luogu.com.cn/contest/68326
```

</details>

<details>
<summary> > lsct -o cf lg -L en </summary>

```text
2 contests in the last 3 days


OJ: Codeforces
Rule: ICPC
Start time: 2022/5/13 22:35:00
End time: 2022/5/14 00:35:00
https://codeforces.com/contests/1680


OJ: Luogu
Rule: IOI
Start time: 2022/5/14 14:00:00
End time: 2022/5/14 18:00:00
https://www.luogu.com.cn/contest/68326
```

</details>

<details>
<summary> > lsct -r -o cf lg </summary>

```bash
[
  {
    ojName: 'Codeforces',
    name: 'Educational Codeforces Round 128 (Rated for Div. 2)',
    rule: 'ICPC',
    startTime: 2022-05-13T14:35:00.000Z,
    endTime: 2022-05-13T16:35:00.000Z,
    url: 'https://codeforces.com/contests/1680'
  },
  {
    ojName: 'Luogu',
    name: '【LGR-109】洛谷 5 月月赛 II & Windy Round 6',
    rule: 'IOI',
    startTime: 2022-05-14T06:00:00.000Z,
    endTime: 2022-05-14T10:00:00.000Z,
    url: 'https://www.luogu.com.cn/contest/68326'
  }
]
```

</details>

### API

If you want to call lscontests in your project to get a list of contests information, or if you need to add OJ support, then you can call the lscontests API like the following:

#### Get contests information string

```typescript
import { getString } from "lscontests";

getString({ abbrList: ["cf", "lg"] }).then(console.log);
```

The result of this code is the same as `lsct -o cf lg`.

#### Get contests information list

```typescript
import { getList } from "lscontests";

getList({ sort: false }).then(console.log);
```

The result of this code is the same as `lsct -r --no-sort`.

#### Add OJ support

```typescript
import { addOJ, getList } from "lscontests";

addOJ("ts", {
    name: "testOJ", get: async () => [{
        ojName: "testOJ",
        name: "testContest",
        rule: "ICPC",
        startTime: new Date(Date.now() + 5 * 86400000),
        endTime: new Date(Date.now() + 6 * 86400000),
        url: "https://www.test.com"
    }]
});

getList({ abbrList: ["ts"], days: 7 }).then(console.log);
```

The result of this code is as follows:

```bash
[
  {
    ojName: 'testOJ',
    name: 'testContest',
    rule: 'ICPC',
    startTime: 2022-05-15T11:50:42.032Z,
    endTime: 2022-05-16T11:50:42.032Z,
    url: 'https://www.test.com'
  }
]
```

## License

[GPL-3.0](https://www.gnu.org/licenses/gpl-3.0.html)
