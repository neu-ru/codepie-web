import { PrismaClient } from '@prisma/client';

import { positionCode } from '../pages/api/positions';
import { techStackCode } from '../pages/api/techstacks';

const prismaClient = new PrismaClient();

function addPositions() {
  return prismaClient.position.createMany({
    data: positionCode.map((positionCode, index) => ({
      code: positionCode,
      order: index + 1,
    })),
  });
}

function addTechStacks() {
  return prismaClient.techStack.createMany({
    data: techStackCode.map((techStackCode, index) => ({
      code: techStackCode,
      order: index + 1,
    })),
  });
}

async function main() {
  await addPositions();
  await addTechStacks();
}

main()
  .then(async () => {
    await prismaClient.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prismaClient.$disconnect();
    process.exit(1);
  });

export {};
