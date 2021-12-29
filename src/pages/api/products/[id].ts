import prisma from '../../../../lib/prisma';

const getProductsById = async (id: string) => prisma.products.findMany({
  where: {
    id: parseInt(id, 10),
  },
});

export default async function handle(req, res) {
  switch (req.method) {
    case 'GET': {
      const { id } = req.query;
      const result = await getProductsById(id);
      return res.json(result[0] || null);
    }
    default: {
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
}
