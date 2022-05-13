const fs = require("fs");
const lsct = require("../dist/cli");

const readme = "README.md";
const cmds = [
    "",
    "-o at cf",
    "-o lg -d 7 -L en",
    "-r -o cf --no-sort"
];

/**
 * 
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
 * 
 * @param {string} type 
 * @param {string} content 
 * @returns 
 */
function codeblock(type, content)
{
    return `\`\`\`${type}\n${content.trim()}\n\`\`\``;
}

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
    const res = await Promise.all(cmds.map(async cmd =>
    {
        return detailsblock(`<code>> lsct ${cmd}<code>`, codeblock("text", await lsct.cli(cmd)));
    }));
    content = repl(content, "cli", res.join("\n\n"));
    fs.writeFileSync(readme, content);
    return 0;
}

main().then(process.exit);
