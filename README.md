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

```bash
lsct [options]

Options:
  -V, --version      output the version number
  -d, --days, <day>  Number of days to get contests information (default: "3")
  -l, --list         List all supported OJ
  -o, --oj <ojs...>  OJs to get contests information (choices: "cf", "lg", "nc")
  -h, --help         display help for command
```

Its performance:

```bash
> lsct
[
  {
    ojName: 'Codeforces',
    name: 'Codeforces Round #790 (Div. 4)',
    rule: 'ICPC',
    startTime: 2022-05-10T14:35:00.000Z,
    endTime: 2022-05-10T16:35:00.000Z,
    url: 'https://codeforces.com/contests/1676'
  },
  {
    ojName: 'NowCoder',
    name: '牛客挑战赛60',
    rule: 'ICPC',
    startTime: 2022-05-13T11:00:00.000Z,
    endTime: 2022-05-13T14:00:00.000Z,
    url: 'https://ac.nowcoder.com/acm/contest/11200'
  }
]
```

### API

If you want to call lscontests in your project to get a list of contests information, or if you need to add OJ support, then you can call the lscontests API like the following:

#### Get a list of contests information

```typescript
import { list } from "lscontests";

list().then(console.log);
```

The result of this code is the same as using cli directly without arguments.

#### Add OJ support

```typescript
import { addOJ, list } from "lscontests";

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

list(["ts"], 7).then(console.log);
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
