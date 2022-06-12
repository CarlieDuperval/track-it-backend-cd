import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

export const getDb = async () => {
  const client = new MongoClient(process.env.MONGO_URL);
  await client.connect();
  return client.db("TrackIT");
};

export const getSalesCollection = async () => {
  const db = await getDb();
  return db.collection("sales");
};
// export const getProductCollection = async () => {
//   const db = await getDb();
//   return db.collection("products");
// };
