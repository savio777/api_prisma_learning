import { Request, Response } from "express";

import { prismaClient } from "../database/prismaClient";

export class CreateProductController {
  async handle(req: Request, res: Response) {
    const { name, bar_code, price } = req.body;

    const product = await prismaClient.product.create({
      data: { name, bar_code, price },
    });

    return res.json(product);
  }
}
