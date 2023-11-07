import { Prisma, PrismaClient } from "@prisma/client";

import seedFile from "../db/seeds/activeSeed.json";

console.log("typeof seedFile==>", typeof seedFile);

// const prisma = new PrismaClient();
// const prisma = new PrismaClient({ log: ["query"] });

// const getRecipe = (): Prisma.RecipeCreateInput[] => {
//   return seedFile as Prisma.RecipeCreateInput[];
// };

// async function main() {
//   const recipes = await Promise.all(
//     getRecipe().map(recipe => prisma.recipe.create({ data: recipe }))
//   );
// }

// main()
//   .then(async () => {
//     console.log("db operations completed");
//     await prisma.$disconnect();
//   })
//   .catch(async e => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
