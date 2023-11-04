import { Prisma, PrismaClient } from "@prisma/client";

import * as seedFile from "../db/seeds/sampleSeed.json" assert { type: "json" };

console.log("seedFile==>", seedFile);

const prisma = new PrismaClient();
// const prisma = new PrismaClient({ log: ["query"] });

const getRecipe = () => {
  return seedFile.default;
};

async function main() {
  const users = await Promise.all(
    getRecipe().map(recipe => prisma.recipe.create({ data: recipe }))
  );
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
