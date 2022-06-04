import { MongoClient } from "mongodb";

export const getDb = async () => {
  const client = new MongoClient(process.env.MONGO_URL);
  await client.connect();
  return client.db("sales-tracking"); // data base
};

export const getSalesCollection = async () => {
  const db = await getDb();
  return db.collection("sales"); // sales collection
};
export const getProductCollection = async () => {
  const db = await getDb();
  return db.collection("products");
};
