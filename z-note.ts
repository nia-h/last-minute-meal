// import { PrismaClient } from '@prisma/client';

// const prismaClientSingleton = () => {
//   return new PrismaClient();
// };

// type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClientSingleton | undefined;
//   x: Number;
// };

// const dog = { age: 1, breed: 'Husky' };

// const myDog = dog as {
//   breed: string; //TypeScript only allows type assertions which convert to a more specific or less specific version of a type.
// };

// const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

// export default prisma;

// if (process.env.NODE_ENV !== 'production') {
//   globalForPrisma.prisma = prisma;
//   globalForPrisma.x = 7;
// }

//With TypeScript,ts-node does transpiling and typechecking by default; typechecking can be disabled with the following flag --transpile-only.
//Example: "seed": "ts-node --transpile-only prisma/seed.ts"

// import { parseArgs } from 'node:util';

// const options = {
//   environment: { type: 'string' },
// };

// async function main() {
//   const {
//     values: { environment },
//   } = parseArgs({ options });

//   switch (environment) {
//     case 'development':
//       /** data for your development */
//       break;
//     case 'test':
//       /** data for your test environment */
//       break;
//     default:
//       break;
//   }
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async e => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

const recipe = {
  'rmK12Uau.ntP510KeImX506H6Mr6jTu': {
    title: 'Slow Cooker Chicken and Dumplings',
    ingredients: [
      '4 skinless, boneless chicken breast halves ADVERTISEMENT',
      '2 tablespoons butter ADVERTISEMENT',
      '2 (10.75 ounce) cans condensed cream of chicken soup ADVERTISEMENT',
      '1 onion, finely diced ADVERTISEMENT',
      '2 (10 ounce) packages refrigerated biscuit dough, torn into pieces ADVERTISEMENT',
      'ADVERTISEMENT',
    ],
    instructions:
      'Place the chicken, butter, soup, and onion in a slow cooker, and fill with enough water to cover.\nCover, and cook for 5 to 6 hours on High. About 30 minutes before serving, place the torn biscuit dough in the slow cooker. Cook until the dough is no longer raw in the center.\n',
    picture_link: '55lznCYBbs2mT8BTx6BTkLhynGHzM.S',
  },
  '5ZpZE8hSVdPk2ZXo1mZTyoPWJRSCPSm': {
    title: 'Awesome Slow Cooker Pot Roast',
    ingredients: [
      '2 (10.75 ounce) cans condensed cream of mushroom soup ADVERTISEMENT',
      '1 (1 ounce) package dry onion soup mix ADVERTISEMENT',
      '1 1/4 cups water ADVERTISEMENT',
      '5 1/2 pounds pot roast ADVERTISEMENT',
      'ADVERTISEMENT',
    ],
    instructions:
      'In a slow cooker, mix cream of mushroom soup, dry onion soup mix and water. Place pot roast in slow cooker and coat with soup mixture.\nCook on High setting for 3 to 4 hours, or on Low setting for 8 to 9 hours.\n',
    picture_link: 'QyrvGdGNMBA2lDdciY0FjKu.77MM0Oe',
  },
};

const values = Object.values(recipe);

console.log('values==>', values);

let valuesArr = [
  {
    title: 'Slow Cooker Chicken and Dumplings',
    ingredients: [
      '4 skinless, boneless chicken breast halves ADVERTISEMENT',
      '2 tablespoons butter ADVERTISEMENT',
      '2 (10.75 ounce) cans condensed cream of chicken soup ADVERTISEMENT',
      '1 onion, finely diced ADVERTISEMENT',
      '2 (10 ounce) packages refrigerated biscuit dough, torn into pieces ADVERTISEMENT',
      'ADVERTISEMENT',
    ],
    instructions:
      'Place the chicken, butter, soup, and onion in a slow cooker, and fill with enough water to cover.\n' +
      'Cover, and cook for 5 to 6 hours on High. About 30 minutes before serving, place the torn biscuit dough in the slow cooker. Cook until the dough is no longer raw in the center.\n',
    picture_link: '55lznCYBbs2mT8BTx6BTkLhynGHzM.S',
  },
  {
    title: 'Awesome Slow Cooker Pot Roast',
    ingredients: [
      '2 (10.75 ounce) cans condensed cream of mushroom soup ADVERTISEMENT',
      '1 (1 ounce) package dry onion soup mix ADVERTISEMENT',
      '1 1/4 cups water ADVERTISEMENT',
      '5 1/2 pounds pot roast ADVERTISEMENT',
      'ADVERTISEMENT',
    ],
    instructions:
      'In a slow cooker, mix cream of mushroom soup, dry onion soup mix and water. Place pot roast in slow cooker and coat with soup mixture.\n' +
      'Cook on High setting for 3 to 4 hours, or on Low setting for 8 to 9 hours.\n',
    picture_link: 'QyrvGdGNMBA2lDdciY0FjKu.77MM0Oe',
  },
];

const betterRecipe = valuesArr.map(recipe => {
  const newIngreds = recipe.ingredients.map(ingred => {
    ingred = ingred.replace(' ADVERTISEMENT', '');
    ingred = ingred.replace('ADVERTISEMENT', ''); ////regex needed here
    return ingred;
  });
  recipe.ingredients = newIngreds.filter(el => el !== '');
  return recipe;
});

console.log('betterRecipe==>', betterRecipe);
