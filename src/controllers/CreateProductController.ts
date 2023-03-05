import { Request, Response } from "express";

import { prismaClient } from "../database/prismaClient";

export class CreateProductController {
  async handle(req: Request, res: Response) {
    const { name, bar_code, price } = req.body;

    console.log(price);

    const product = await prismaClient.product.create({
      data: { name, bar_code, price },
    });

    console.log(product.price);

    return res.json(product);
  }
}
