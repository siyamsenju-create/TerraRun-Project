import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { clerkUserId: "dev_user_terrarun" },
    update: {},
    create: {
      clerkUserId: "dev_user_terrarun",
      email: "dev@terrarun.local",
      profile: {
        create: {
          displayName: "Dev Runner",
          homeCity: "Bengaluru",
        },
      },
    },
  });

  console.log(`Seeded TerraRun dev user ${user.id}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

