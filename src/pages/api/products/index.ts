import prisma from '../../../../lib/prisma';
import { ICreateProduct } from '../../../domain/products/createProduct';

const createProduct = async (data: ICreateProduct) => prisma.products.create({
  data: {
    ...data,
  },
});

const getProducts = async () => prisma.products.findMany({
  select: {
    active: true,
    name: true,
    price: true,
    images: true,
  },
});

export default async function handle(req, res) {
  switch (req.method) {
    case 'POST': {
      const {
        active, name, price, images
      } = req.body;

      const result = await createProduct({
        active,
        name,
        price,
        images,
      });
      return res.json(result);
    }
    case 'GET': {
      const result = await getProducts();
      return res.json(result);
    }
    default: {
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
}
