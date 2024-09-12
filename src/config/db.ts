import { MongoClient } from "mongodb";
import { DB_PASS, DB_USERNAME } from "@config/env-variables";

const url = `mongodb+srv://${DB_USERNAME}:${DB_PASS}@cluster0.fo3dmlm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
export const client = new MongoClient(url);
export const DB_NAME = 'ask'

export async function connectOnDb() {
  try {
    await client.connect();

    return {
      ok: true,
    };
  } catch (e) {
    return {
      ok: false,
    };
  }
}
