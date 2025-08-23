"use server";
import { getDb } from "./mongodb";

const MONGODB_DB = process.env.MONGODB_DB_NAME;

if (!MONGODB_DB) {
  throw new Error(
    "Please define the MONGODB_DB_NAME environment variable inside .env.local"
  );
}

export async function getUsers() {
  const db = await getDb();
  const users = await db.collection("users").find({}).toArray();
  return users;
}

export async function createUser(userData: any) {
  const db = await getDb();
  const result = await db.collection("users").insertOne(userData);
  return result;
}
