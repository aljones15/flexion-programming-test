const fs = require('fs');
const records = require("./data.json");
const transformer = require("./index");

const next = transformer.default(records);
const diskString = JSON.stringify(next);
const path = `./output/${Date.now()}.json`;
fs.writeFile(path, diskString, 'utf8', () => console.log(`Wrote to Disk`))
