import prisma from '../../../../lib/prisma';

const createUser = (data) => {
  return prisma.users.create({
    data: {
      ...data
    }
  });
};

export default async function handle(req, res) {
  switch (req.method) {
    case 'POST': {
      const { active, name, email, roleId } = req.body; // TODO: receive password and crypt it

      const result = await prisma.users.create({
        data: {
          active,
          name,
          email,
          roleId,
        },
      });
      return res.json(result);
    }
    default: {
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
}
