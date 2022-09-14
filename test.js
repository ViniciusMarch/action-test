const fs = require('fs');

const path = "dist";

if(fs.existsSync(`${path}/zcli.apps.config.json`)) {
  console.log("teste01");
}

console.log("teste02");