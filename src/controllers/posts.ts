import { postDb } from "@models/post";
import { parse } from "@formkit/tempo"
import type { Response } from "express";
import { checkLinksOnContent, checkUsersMentioned } from "@utils/post";

export async function addPost(req: ExtendedReqWithToken, res: Response): Promise<Response> {
  const postPayload = req.body;
  const decodedToken = req.decodedToken;
  
  const links = checkLinksOnContent(postPayload?.content)
  const usersMentioned = checkUsersMentioned(postPayload?.content)

  
  return res.json({ postPayload, decodedToken });
}
