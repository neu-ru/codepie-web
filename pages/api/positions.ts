import { NextApiHandler } from 'next';
import prismaClient from '../../prisma/client';

const positionsRouter: NextApiHandler = async (req, res) => {
  const positions = await prismaClient.position.findMany();

  res.status(200).json(positions);
};

export default positionsRouter;

export const positionCode = [
  'front',
  'back',
  'infra',
  'mobile',
  'android',
  'ios',
] as const;
