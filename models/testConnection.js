const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI; // Ensure this matches your .env file

async function testConnection() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected to MongoDB successfully!");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  } finally {
    await client.close();
  }
}

testConnection();