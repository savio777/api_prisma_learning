import { Request, Response } from "express";

import { prismaClient } from "../database/prismaClient";

export class FindAllProductController {
  async handle(req: Request, res: Response) {
    const { name, take, page } = req.query;

    const nameQuery = name ? `%${String(name)}%` : undefined;
    const takeNumber = take ? Number(take) : 10;
    const pageNumber = page ? Number(page) : 1;

    const skip = pageNumber && takeNumber && takeNumber * (pageNumber - 1);

    const products = await prismaClient.product.findMany({
      where: { name: { contains: nameQuery } }, // https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#filter-conditions-and-operators
      take: takeNumber,
      skip,
      include: { ProductCategory: true },
    });

    return res.json({ products, page: pageNumber, total: products.length });
  }
}
