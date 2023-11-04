const fs = require("fs");
// const csv = fs.readFileSync('recipe-dataset.csv', 'utf8');
const csvToJson = require("csvtojson");

async function main() {
  try {
    let recipes = await csvToJson().fromFile("recipe-dataset.csv");
    let json = JSON.stringify(recipes);
    fs.writeFileSync("output2.js", json);
  } catch (e) {
    console.log(e);
  }
}
main();
