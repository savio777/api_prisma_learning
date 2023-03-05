import { Router } from "express";

import { CreateProductController } from "./controllers/CreateProductController";

export const router = Router();

const createProduct = new CreateProductController();

router.get("", (_, res) => res.json({ teste: "" }));

router.post("/products", createProduct.handle);
