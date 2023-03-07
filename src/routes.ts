import { Router } from "express";

import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { CreateProductController } from "./controllers/CreateProductController";
import { CreateProductCategoryController } from "./controllers/CreateProductCategoryController";
import { CreateProductWithExistCategoryController } from "./controllers/CreateProductWithExistCategoryController";
import { FindOneByIdProductController } from "./controllers/FindOneByIdProductController";
import { FindOneByIdCategoryController } from "./controllers/FindOneByIdCategoryController";
import { FindAllProductController } from "./controllers/FindAllProductController";
import { UpdateProductController } from "./controllers/UpdateProductController";
import { DeleteProductController } from "./controllers/DeleteProductController";

export const router = Router();

const createProduct = new CreateProductController();
const createCategory = new CreateCategoryController();
const createProductCategory = new CreateProductCategoryController();
const createProductWithExistCategory =
  new CreateProductWithExistCategoryController();

const findOneByIdProduct = new FindOneByIdProductController();
const findOneByIdCategory = new FindOneByIdCategoryController();

const findAllProduct = new FindAllProductController();

const updateProduct = new UpdateProductController();

const deleteProduct = new DeleteProductController();

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

router.get("/products/:id", findOneByIdProduct.handle);
router.get("/categories/:id", findOneByIdCategory.handle);

router.get("/products", findAllProduct.handle);

router.put("/products/:id", updateProduct.handle);

router.delete("/products/:id", deleteProduct.handle);
