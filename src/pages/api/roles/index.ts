import prisma from '../../../../lib/prisma';

const createRole = async (data) => {
  return prisma.roles.create({
    data: {
      ...data
    }
  });
};

const getRoles = async () => prisma.roles.findMany();

export default async function handle(req, res) {
  switch (req.method) {
    case 'POST': {
      const { active, name } = req.body;

      const result = await createRole({
        active,
        name,
      });
      return res.json(result);
    }
    case 'GET': {
      const result = await getRoles();
      return res.json(result);
    }
    default: {
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
}

