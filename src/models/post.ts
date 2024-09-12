import { client, DB_NAME } from "@config/db";

export const postDb = client.db(DB_NAME).collection('post')