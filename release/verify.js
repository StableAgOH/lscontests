const fs = require("fs");

function main()
{
    if(!fs.existsSync("README.md"))
    {
        console.error("There is no README.md");
        return 1;
    }
    return 0;
}

process.exit(main());
