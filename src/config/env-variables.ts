import { config } from "dotenv";

config()

export const PORT = process.env.PORT ?? 3000

export const DB_PASS = process.env.DB_PASS
export const DB_USERNAME = process.env.DB_USERNAME

export const SECRET_JWT = process.env.SECRET_JWT

export const CLD_NAME= process.env.CLD_NAME
export const CLD_KEY = process.env.API_KEY
export const CLD_SECRET = process.env.API_SECRET