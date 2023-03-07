import { Request, Response } from "express";

import { prismaClient } from "../database/prismaClient";

export class FindOneByIdCategoryController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const category = await prismaClient.category.findFirst({
      where: { id },
      include: { ProductCategory: true }, // deve usar where no caso de app em prod para não sobrecarregar
    });

    return res.json(category);
  }
}
