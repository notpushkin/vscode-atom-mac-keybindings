const fs = require("fs");

const packageJson = require("./package.json");
packageJson.contributes.keybindings = packageJson.contributes.keybindings.map(
  (kb) => ({
    ...kb,
    mac: kb.mac,
    win: kb.mac,
    linux: kb.mac,
    key: kb.mac,
  })
);

fs.writeFileSync("./package.json", JSON.stringify(packageJson, null, 4) + "\n");
