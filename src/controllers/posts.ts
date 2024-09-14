import { postDb } from "@models/post";
import { parse } from "@formkit/tempo";
import type { Response } from "express";
import { checkLinksOnContent, checkUsersMentioned } from "@utils/post";
import { uploadFiles } from "@services/cloudinary";

export async function addPost(
  req: ExtendedReqWithToken,
  res: Response
): Promise<Response> {
  const postPayload = req.body;
  const decodedToken = req.decodedToken;
  const files = req.files;

  // CHEQUEAR EL CONTENIDO
  //const links = checkLinksOnContent(postPayload?.content);
  //const usersMentioned = checkUsersMentioned(postPayload?.content);

  // SUBIR ARCHIVOS
  //const uploadedFiles = files !== null ? await uploadFiles(Object.values(files as any), { folder: "posts" }) : null;

  
  return res.json({});
}
