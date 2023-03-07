import { Request, Response } from "express";

import { prismaClient } from "../database/prismaClient";

export class FindOneByIdProductController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const product = await prismaClient.product.findFirst({
      where: { id },
      include: { ProductCategory: true },
    });

    return res.json(product);
  }
}
