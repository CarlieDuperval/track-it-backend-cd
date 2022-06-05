import { ObjectId } from "mongodb";
import { getSalesCollection } from "../gateway/connectDb.js";

export const createSale = async (sale) => {
  const col = await getSalesCollection();
  const { insertedId } = await col.insertOne(sale);
  sale.id = insertedId;
  return sale;
};

export const createMultipleSales = async (sales) => {
  try {
    const col = await getSalesCollection();
    await col.insertMany(sales);
  } catch (error) {
    console.error(error);
  }
};

export const getSaleById = async (id) => {
  const col = await getSalesCollection();
  const sale = await col.findOne({ _id: new ObjectId(id) });
  return sale;
};

export const getAllSales = async () => {
  const col = await getSalesCollection();
  const allSales = await col.find({}).toArray();
  return allSales;
};

export const updateSales = async (id, updateObj) => {
  const col = await getSalesCollection();
  await col.updateOne({ _id: new ObjectId(id) }, { $set: updateObj });
};
