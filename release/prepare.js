const fs = require("fs");
const lsct = require("../dist/cli");

const readme = "README.md";
const cmds = [
    "",
    "-o at cf -d 7",
    "-o lg nc -d 7 -L en",
    "-o at cf -d 7 -r --no-sort"
];

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

async function main()
{
    let content = fs.readFileSync(readme).toString();
    content = repl(content, "help", codeblock("text", await lsct.cli("-h")));
    const res = await Promise.all(
        cmds.map(async cmd => detailsblock(
            `<code>> lsct ${cmd}</code>`,
            codeblock(cmd.includes("-r") || cmd.includes("--raw") ? "json" : "text", await lsct.cli(cmd))
        ))
    );
    res.unshift(
        `(*The following content was automatically generated in ${new Date().toUTCString()}*)`
    );
    content = repl(content, "cli", res.join("\n\n"));
    fs.writeFileSync(readme, content);
    return 0;
}

main().then(process.exit);
