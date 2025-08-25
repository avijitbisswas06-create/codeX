import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // Use the MongoDB connection string from environment variables
const dbName = process.env.MONGODB_DB || "clustercodex"; // Use the database name from environment variables

let client: MongoClient;

export const connectToDatabase = async () => {
  if (!client) {
    if (!uri) {
      throw new Error("MONGODB_URI environment variable is not defined");
    }
    client = new MongoClient(uri);
    await client.connect();
  }
  return client.db(dbName); // Return the database instance with the specified database name
};
