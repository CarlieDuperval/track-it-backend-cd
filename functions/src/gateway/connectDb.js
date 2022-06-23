import { MongoClient } from "mongodb"; 
import dotenv from "dotenv";

dotenv.config(); // Loads .env file contents into process.env

export const getDb = async () => {
  const client = new MongoClient(process.env.MONGO_URL);
  await client.connect(); // Connect to the URL
  return client.db("TrackIT");
};

export const getSalesCollection = async () => {
  const db = await getDb();
  return db.collection("sales"); // if !E, create a new col
};

