import { client, DB_NAME } from "@config/db";

export const userModel = client.db(DB_NAME).collection('user')