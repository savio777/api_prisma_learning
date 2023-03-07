import { Request, Response } from "express";

import { prismaClient } from "../database/prismaClient";

export class UpdateProductController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { name, bar_code, price } = req.body;

    const product = await prismaClient.product.update({
      where: { id },
      data: { name, bar_code, price },
    });

    return res.json(product);
  }
}
