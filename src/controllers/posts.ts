import type { Request, Response } from "express";

export async function addPost(req: Request, res: Response) {
  res.json(req.body)
}