const fs = require("fs");
const lsct = require("../dist/cli");

/**
 * @param {string} str
 * @param {string} block
 * @param {string} content
 */
function repl(str, block, content)
{
    const re = new RegExp(String.raw`(?<=<!-- block_${block} begin -->\n)[\w\W]*(?=\n<!-- block_${block} end -->)`);
    return str.replace(re, content);
}

/**
 * @param {string} type
 * @param {string} content
 */
function codeblock(type, content)
{
    return `\`\`\`${type}\n${content.trim()}\n\`\`\``;
}

/**
 * @param {string} title
 * @param {string} content
 */
function detailsblock(title, content)
{
    return `<details>
<summary> ${title} </summary>

${content}

</details>`;
}

/**
 * @param {string} path
 * @param {string[]} cmds
 * @param {string} releaseMsg
 */
async function update(path, cmds, releaseMsg)
{
    let content = fs.readFileSync(path).toString();
    lsct.cli("-h", undefined, msg => content = repl(content, "help", codeblock("text", msg)));
    const res = await Promise.all(
        cmds.map(async cmd =>
        {
            let text;
            await lsct.cli(cmd, undefined, msg => text = detailsblock(
                `<code>> lsct ${cmd}</code>`,
                codeblock(cmd.includes("-r") || cmd.includes("--raw") ? "json" : "text", msg)
            ));
            return text;
        })
    );
    res.unshift(releaseMsg);
    content = repl(content, "cli", res.join("\n\n"));
    fs.writeFileSync(path, content);
}

async function main()
{
    await update("README.md", [
        "-L en",
        "-o at cf -d 7 -L en",
        "-o at cf -d -1 -r --no-sort"
    ], `(*The following content was automatically generated using [semantic-release](https://github.com/semantic-release/semantic-release) on ${new Date().toUTCString()}*)`);
    console.error("Resolved README.md");
    await update("README-zh-CN.md", [
        "",
        "-o at cf -d 7",
        "-o at cf -d -1 -r --no-sort"
    ], `（*以下内容是使用 [semantic-release](https://github.com/semantic-release/semantic-release) 于 ${new Date().toUTCString()} 自动生成的*）`);
    console.error("Resolved README-zh-CN.md");
    return 0;
}

main().then(process.exit);
