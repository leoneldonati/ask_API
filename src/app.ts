import { postRouter } from "@routes/posts";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

export const app = express();

// cabecera de express
app.disable("x-powered-by");

// parsear respuestas json
app.use(express.json());

// aceptar formularios
app.use(express.urlencoded({ extended: true }));

// parsear cookies
app.use(cookieParser());

// CORS
app.use(
  cors({
    credentials: true,
  })
);
// rutas
app.use(postRouter);
