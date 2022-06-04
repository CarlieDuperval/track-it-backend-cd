import { getSalesCollection } from "../gateway/connectDb.js";

// tbc / (sales) or (producT)
export const createSales = async (sales) => {
  const col = await getSalesCollection();
  const { insertedId } = await col.insertOne(sales);
  return insertedId;
};

export const getOneSales = async (name) => {
  const col = await getSalesCollection();
  const onsSales = await col.findOne({ name });
};

export const getAllSales = async () => {
  const col = await getSalesCollection();
  const allSales = await col.find({}).toArray();
  return allSales;
};

export const updateSales = async (name, updateObj) => {
  const col = await getSalesCollection();
  await col.updateOne({ name }, { $set: updateObj });
};
