import { Router } from "express";

import { createSale , updateSales } from "../services/sales-service.js";
export const salesRouter = Router();

salesRouter.post("/sales", async (req, res) => {
  const sales = req.body;
  const idSales = await createSale(sales);
  res.status(200).send(idSales.toString);
});

salesRouter.get("/sales", async (req, res) => {
  const salesReport = await getAllSales();
  res.status(200).send(salesReport);
});
// ?? id or 
salesRouter.patch('/sales/:id', (req, res) => {
    const { id, updateObj } = await updateSales(id , updateObj)
})