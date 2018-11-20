const records = require("./data.json");
const transformer = require("./index");

const next = transformer.default(records);
