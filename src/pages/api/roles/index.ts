import { getSession } from 'next-auth/client';
import prisma from '../../../../lib/prisma';

// POST /api/post
// Required fields in body: title
// Optional fields in body: content

const createUser (data) => {
  return prisma.users.create({
    data: {
      ...data
    }
  });
};

export default async function handle(req, res) {
  switch (req.method) {
    case 'POST': {
      const { name, email } = req.body;

      const session = await getSession({ req });
      const result = await prisma.users.create({
        data: {
          title,
          content: content,
          author: { connect: { email: session?.user?.email } },
        },
      });
      res.json(result);
    }
    default: {
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
}
