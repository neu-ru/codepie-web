import { NextApiHandler } from 'next';
import { unstable_getServerSession } from 'next-auth';
import prismaClient from '../../../prisma/client';
import { authOptions } from '../auth/[...nextauth]';

type RequestBody = {
  position: string;
  techStacks: string[];
};

// @todo: change body property from name to id
const signupRouter: NextApiHandler = async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  const user = await prismaClient.user.findUnique({
    where: { email: session?.user.email },
    include: {
      userPosition: { include: { position: true } },
      userTechStack: { include: { techStack: true } },
    },
  });
  if (!user) {
    return res.status(403).json({ message: 'Forbidden' });
  }
  if (user.userPosition.length > 0 || user.userTechStack.length > 0) {
    return res.status(409).json({ message: 'Conflict' });
  }

  const body = req.body as RequestBody;

  const position = await prismaClient.position.findFirst({
    where: { code: body.position },
  });
  if (!position) {
    return res.status(404).json({ message: 'Not Found' });
  }

  const techStacks = await prismaClient.techStack.findMany({
    where: { code: { in: body.techStacks } },
  });
  if (techStacks.length === 0) {
    return res.status(404).json({ message: 'Not Found' });
  }

  const positionQuery = prismaClient.userPosition.create({
    data: { userID: user.id, positionID: position.id },
  });
  const techStackQuery = prismaClient.userTechStack.createMany({
    data: techStacks.map((stack) => ({
      userID: user.id,
      techStackID: stack.id,
    })),
  });

  try {
    await Promise.all([positionQuery, techStackQuery]);
  } catch {
    return res.status(500).json({ message: 'Internal Server Error' });
  }

  return res.status(200).json({ message: 'OK' });
};

export default signupRouter;
