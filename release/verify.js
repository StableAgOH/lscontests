const fs = require("fs");

function main()
{
    if(!fs.existsSync("./dist/cli.js"))
    {
        console.error("Cannot find ./dist/cli.js, did you forget to build?");
        return 1;
    }
    if(!fs.existsSync("README.md"))
    {
        console.error("There is no README.md");
        return 1;
    }
    if(!fs.existsSync("README-zh-CN.md"))
    {
        console.error("There is no README-zh-CN.md");
        return 1;
    }
    return 0;
}

process.exit(main());
