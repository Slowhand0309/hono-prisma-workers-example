import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [...Array(5)].map((_, i) => ({
  name: `User${i + 1}`,
  email: `user${i + 1}@example.com`,
}));

const main = async () => {
  const result = await prisma.user.createMany({
    data: userData,
    skipDuplicates: true,
  });
  console.log({ result });
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
