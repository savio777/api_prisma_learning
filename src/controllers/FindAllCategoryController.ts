import { Request, Response } from "express";

import { prismaClient } from "../database/prismaClient";

export class FindAllCategoryController {
  async handle(req: Request, res: Response) {
    const { take, page } = req.params;

    const takeNumber = take ? Number(take) : undefined;
    const pageNumber = page ? Number(page) : undefined;

    const skip = pageNumber && takeNumber && takeNumber * (pageNumber - 1);

    const category = await prismaClient.category.findMany({
      take: takeNumber,
      skip,
    });

    return res.json(category);
  }
}
