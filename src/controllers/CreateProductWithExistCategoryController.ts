import { Request, Response } from "express";

import { prismaClient } from "../database/prismaClient";

export class CreateProductWithExistCategoryController {
  async handle(req: Request, res: Response) {
    const { id_category} = req.params
    const { name, price, bar_code, } = req.body;

    const product = await prismaClient.productCategory.create({
      data: {
        product: {
          create: {
            name,
            price,
            bar_code,
          },
        },
        category: { connect: { id: id_category } },
      },
    });

    res.json(product);
  }
}
