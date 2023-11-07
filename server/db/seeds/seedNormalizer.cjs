// const seedJsonFile = require("../seeds/recipe-seed-file.json");

const fs = require("fs");

const parseIngres = ingres => {
  let trimmed = ingres.slice(1, -1);
  let result = [];

  let i = 0;

  while (i < trimmed.length) {
    if (trimmed[i] === "'") {
      let j = i + 1;
      let el = "";
      while (trimmed[j] !== "'") {
        let char = trimmed[j];

        el += char;
        j++;
      }
      result.push(el);
      i = j + 2;
    } else {
      i++;
    }
  }
  return result;
};

const deleteLastKey = seedFile => {
  for (let recipe of seedFile) {
    delete recipe.Cleaned_Ingredients;
    // recipe.Ingredients = parseIngres(recipe.Ingredients);
  }
  fs.writeFileSync("normalized.json", JSON.stringify(seedFile));
};
// deleteLastKey(seedJsonFile);

const normalizeIngres = seedFile => {
  for (let recipe of seedFile) {
    recipe.Ingredients = parseIngres(recipe.Ingredients);
    // recipe.Ingredients = parseIngres(recipe.Ingredients);
  }
  fs.writeFileSync("seedOutput1.json", JSON.stringify(seedFile));
};
// deleteLastKey(seedJsonFile);

// normalizeIngres(testSeed);

const deleteLastFirstField = seedFile => {
  for (let recipe of seedFile) {
    delete recipe.field1;
  }
  fs.writeFileSync("recipeSeed.json", JSON.stringify(seedFile));
  console.log("check.....");
};

// deleteLastFirstField(seedJsonFile);

module.exports = { parseIngres };
