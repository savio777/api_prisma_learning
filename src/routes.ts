import { Router } from "express";

import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { CreateProductController } from "./controllers/CreateProductController";
import { CreateProductCategoryController } from "./controllers/CreateProductCategoryController";

export const router = Router();

const createProduct = new CreateProductController();
const createCategory = new CreateCategoryController();
const createProductCategory = new CreateProductCategoryController();

router.get("", (_, res) => res.json({ test: "" }));

router.post("/products", createProduct.handle);
router.post("/categories", createCategory.handle);
router.post("/products-categories", createProductCategory.handle);
