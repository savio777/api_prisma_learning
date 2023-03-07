import { Request, Response } from "express";

import { prismaClient } from "../database/prismaClient";

// error

export class DeleteProductController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const product = await prismaClient.product.delete({
      where: { id },
    });

    return res.json(product);
  }
}
