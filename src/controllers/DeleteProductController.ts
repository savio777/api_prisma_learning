import { Request, Response } from "express";

import { prismaClient } from "../database/prismaClient";

// error

export class DeleteProductController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const productCategory = await prismaClient.productCategory.findFirst({
        where: { id_product: id },
      });

      if (!productCategory) {
        return res.json({ error: "not found product category" });
      }

      const deletedProductCategory = prismaClient.productCategory.delete({
        where: { id: productCategory.id },
      });

      const deletedProduct = prismaClient.product.delete({
        where: { id },
      });

      const transaction = await prismaClient.$transaction([
        deletedProductCategory,
        deletedProduct,
      ]);

      return res.json(transaction);
    } catch (error) {
      console.log(error);
      return res.json({ error: "error in transaction delete" });
    }
  }
}
