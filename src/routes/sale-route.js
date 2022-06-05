import { Router } from "express";

import {
  createSale,
  updateSales,
  getAllSales,
} from "../services/sales-service.js";
export const salesRouter = Router();

salesRouter.post("/sales", async (req, res) => {
  const {} = req.body;
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

// year: 2021,
// name: salesData[0],
// productCategory: salesData[1],
// cost: Number.parseFloat(salesData[2]),
// price: Number.parseFloat(salesData[3]),
// qtySold: {
//   jan:
