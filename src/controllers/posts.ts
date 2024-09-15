import { postDb } from "@models/post";
import { format } from "@formkit/tempo";
import { checkLinksOnContent, checkUsersMentioned } from "@utils/post";
import { uploadFiles } from "@services/files";
import { HTTP_STATUS } from "@config/constants";
import type { Response } from "express";
import { optimizeImages } from "@utils/sharp";

export async function addPost(
  req: ExtendedReqWithToken,
  res: Response
): Promise<Response> {
  const postPayload = req.body;
  const decodedToken = req.decodedToken as User;
  const files = req.files;
  
  const { message, number } = HTTP_STATUS.badReq
  if (!postPayload?.content && !files) return res.status(number).json({ message })
  // CHEQUEAR EL CONTENIDO
  const links = checkLinksOnContent(postPayload?.content);
  const usersMentioned = checkUsersMentioned(postPayload?.content);



  try {
    // OPTIMIZAR IMAGENES
    const optimizedAssets = await optimizeImages(Object.values(files as any), { format: 'avif' })

    // SUBIR ARCHIVOS
    const uploadedFiles = files && optimizedAssets ? await uploadFiles(optimizedAssets, { folder: 'posts'}) : null;

    // GUARDAR DOCUMENTO
    const postToSave: PostWithoutId = {
      content: postPayload?.content as string,
      ownerId: decodedToken?._id.toString(),
      comments: [],
      likes: [],
      images: uploadedFiles,
      createdAt: format(new Date() as any, "full"),
      updatedAt: format(new Date() as any, "full"),
      links,
      usersMentioned,
    };

    const savedPost = await postDb.insertOne(postToSave);

    return res.json({...postToSave, _id: savedPost.insertedId });
  } catch (error) {
    const { number, message } = HTTP_STATUS.serverError;
    return res.status(number).json({ message });
  }
}

export async function updatePost(
  req: ExtendedReqWithToken,
  res: Response
): Promise<Response> {


  return res.json({})
}