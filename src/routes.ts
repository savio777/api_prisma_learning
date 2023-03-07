import { Router } from "express";

import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { CreateProductController } from "./controllers/CreateProductController";
import { CreateProductCategoryController } from "./controllers/CreateProductCategoryController";
import { CreateProductWithExistCategoryController } from "./controllers/CreateProductWithExistCategoryController";

export const router = Router();

const createProduct = new CreateProductController();
const createCategory = new CreateCategoryController();
const createProductCategory = new CreateProductCategoryController();
const createProductWithExistCategory =
  new CreateProductWithExistCategoryController();

router.get("", (_, res) => res.json({ test: "" }));

router.post("/products", createProduct.handle);
router.post("/categories", createCategory.handle);
router.post(
  "/products/:id_product/categories/:id_category",
  createProductCategory.handle
);
router.post(
  "/products/categories/:id_category",
  createProductWithExistCategory.handle
);
