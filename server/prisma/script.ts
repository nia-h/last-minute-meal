import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();
const prisma = new PrismaClient({ log: ['query'] });

async function main() {
  const users = await prisma.user.create({ data: { name: 'banana' } });
  console.log(users);
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
