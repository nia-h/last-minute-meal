import { Prisma, PrismaClient } from "@prisma/client";

import { parseIngres } from "../db/seeds/seedNormalizer.cjs";

console.log("parseIngres==>", parseIngres);

const prisma = new PrismaClient();
// const prisma = new PrismaClient({ log: ["query"] });

async function main() {
  const recipe = await prisma.recipe.findFirst({
    where: {
      Ingredients: {
        contains: "butter",
      },
      NOT: {
        Ingredients: {
          contains: "butternut",
        },
      },
    },
  });
  const ingresArray = parseIngres(recipe?.Ingredients);
  console.log("ingresArray==>", ingresArray);
}
main()
  .then(async () => {
    console.log("db operations completed");
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
