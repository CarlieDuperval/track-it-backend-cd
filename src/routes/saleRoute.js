import { Router } from "express";

import { createSales } from "../services/salesService.js";
export const salesRouter = Router();

salesRouter.post("/sales", async (req, res) => {
  const sales = req.body;
  const idSales = await createSales(sales);
  res.status(200).send(idSales.toString);
});

salesRouter.get("/sales", async (req, res) => {
  const salesReport = await getAllSales();
  res.status(200).send(salesReport);
});
