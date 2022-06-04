import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getProduct,
  getProductByFilter,
  getProductById,
  updateProduct,
} from "../services/productService.js";

export const productRouter = Router();

productRouter.post("/products", async (req, res) => {
  try {
    const product = req.body;
    const id = await createProduct(product);
    res.status(201).send(id.toString);
  } catch (error) {
    res.status(500).send(error);
  }
});

productRouter.get("/products", async (req, res) => {
  try {
    const productList = await getAllProducts();
    res.status(200).send(productList);
  } catch (error) {
    res.status(500).send(error);
  }
});

productRouter.get("/products/:id", async (res, req) => {
  try {
    const { name } = req.params;
    const product = await getProduct(name);
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

productRouter.patch("/products/:name", async (res, req) => {
  try {
    const { name, updateObj } = await updateProduct(name, updateObj);
    res.status(200).send("Product updated");
  } catch (error) {
    res.status(500).send(error);
  }
});

productRouter.get("/products/:id", async (res, req) => {
  try {
    const { id } = req.params;
    const col = await getProductById(id);
    res.status(200).send(col);
  } catch (error) {
    res.send(500).send(error);
  }
});

productRouter.get("/products", async (res, req) => {
  const { name, productCategory, cost, salePrice, date } = req.quey;
  const filter = { name, productCategory, cost, salePrice, date };
  try {
    const col = await getProductByFilter(filter);
    res.status(200).send(col);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});
