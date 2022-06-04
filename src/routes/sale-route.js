import { Router } from "express";

import { createSale, updateSales } from "../services/sales-service.js";
export const salesRouter = Router();

salesRouter.post("/sales", async (req, res) => {
  const sale = req.body;
  const result = await createSale(sale);
  res.status(201).send(result);
});

salesRouter.get("/sales", async (req, res) => {
  const salesReport = await getAllSales();
  res.status(200).send(salesReport);
});

salesRouter.patch("/sales/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await updateSales(id);
    res.status(200).send("Sale updated");
  } catch (error) {
    console.error(error);
  }
});
