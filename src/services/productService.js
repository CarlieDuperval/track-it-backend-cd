import { getProductCollection } from "../gateway/connectDb.js";

export const createProduct = async (product) => {
  const col = await getProductCollection();
  const { insertedId } = await col.insertOne(product);
  return insertedId;
};

export const getProduct = async (name) => {
  const col = await getProductCollection();
  const product = await col.findOne({ name });
  return product;
};

export const getAllProducts = async () => {
  const col = await getProductCollection();
  const allProducts = await col.find({}).toArray();
  return allProducts;
};

export const updateProduct = async (name, updateObj) => {
  const col = await getProductCollection();
  await col.updateOne({ name }, { $set: updateObj });
};
