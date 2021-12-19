import prisma from '../../../../lib/prisma';

const createUser = async (data) => {
  return prisma.users.create({
    data: {
      ...data
    }
  });
};

const getUsers = async () => prisma.users.findMany({ select: { active: true, name: true, email: true, role: true } });

export default async function handle(req, res) {
  switch (req.method) {
    case 'POST': {
      const { active, name, email, roleId } = req.body; // TODO: receive password and crypt it

      const result = await createUser({
        active,
        name,
        email,
        roleId,
      });
      return res.json(result);
    }
    case 'GET': {
      const result = await getUsers();
      return res.json(result);
    }
    default: {
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
}
