import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI!);
const dbName = "illaram_healthcare"; // Replace with your DB name

export const connectToDb = async () => {
  if (!client.isConnected()) await client.connect();
  const db = client.db(dbName);
  return db;
};
