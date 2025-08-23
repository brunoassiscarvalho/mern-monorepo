"use server";

import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
} else {
  console.log("MongoDB URI:", process.env.MONGODB_URI);
}

const uri = process.env.MONGODB_URI;

const options = {
  appName: "devrel.template.nextjs",
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // tls: false,
};

let client: MongoClient;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  let globalWithMongo = global as typeof globalThis & {
    _mongoClient?: MongoClient;
  };

  if (!globalWithMongo._mongoClient) {
    globalWithMongo._mongoClient = new MongoClient(uri, options);
  }
  client = globalWithMongo._mongoClient;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
}

// Export a module-scoped MongoClient. By doing this in a
// separate module, the client can be shared across functions.

export async function getDb() {
  const clientPromisse = await client;
  const db = clientPromisse.db("monorepo-test");
  return db;
}
