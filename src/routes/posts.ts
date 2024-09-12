import { Router } from "express";
import { addPost } from "@controllers/posts";
import { checkSessionStatus } from "@middlewares/auth";

export const postRouter = Router();

postRouter.post("/posts", checkSessionStatus, addPost);

