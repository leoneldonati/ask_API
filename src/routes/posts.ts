import { Router } from "express";
import { addPost } from "@controllers/posts";

export const postRouter = Router()

postRouter.post('/posts', addPost)