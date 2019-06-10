const chokidar = require("chokidar");
const exec = require("execute-command-sync");

chokidar.watch(`${__dirname}/composer/*.alda`).on("change", function(file, event) {
  exec(`alda play --file ${JSON.stringify(file)}`, { cwd: __dirname });
});