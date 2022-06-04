import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "../services/productService.js";

export const productRouter = Router();

productRouter.post("/sales", async (req, res) => {
  const product = req.body;
  const id = await createProduct(product);
  res.status(200).send(id.toString);
});

productRouter.get("/sales", async (req, res) => {
  const productList = await getAllProducts();
  res.status(200).send(productList);
});

productRouter.get("/sales/:name", async (res, req) => {
  const { name } = req.params;
  const product = await getProduct(name);
  res.status(200).send(product);
});

productRouter.patch("/sales/:name", async (res, req) => {
  const { name, updateObj } = await updateProduct(name, updateObj);
  res.status(200).send("Product updated");
});
