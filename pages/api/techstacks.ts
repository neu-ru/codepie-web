import { NextApiHandler } from 'next';
import prismaClient from '../../prisma/client';

const techstacksRouter: NextApiHandler = async (req, res) => {
  const techStacks = await prismaClient.techStack.findMany();

  res.status(200).json(techStacks);
};

export default techstacksRouter;

export const techStackCode = [
  'vanila_web',
  'nodejs',
  'python',
  'cpp',
  'android',
  'ios',
] as const;
