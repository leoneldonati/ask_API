import { CLD_KEY, CLD_NAME, CLD_SECRET } from "@config/env-variables";
import { v2 as cloudinary } from "cloudinary";
import { Readable } from "stream";
import type { Image } from "types";

cloudinary.config({
  cloud_name: CLD_NAME,
  api_key: CLD_KEY,
  api_secret: CLD_SECRET,
});

export async function uploadFiles(
  files: Buffer[],
  config?: { folder: string }
): Promise<Image[] | null> {
  try {
    const promises = files.map((buffer) => {
      return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: config?.folder },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve({
                secureUrl: result?.secure_url,
                publicId: result?.public_id,
                height: result?.height,
                width: result?.width,
              });
            }
          }
        );

        // CONVERTIR EL BUFFER EN UN STREAM DE DATOS
        const readableStream = new Readable();
        readableStream.push(buffer);
        readableStream.push(null);

        readableStream.pipe(uploadStream);
      });
    });

    return await Promise.all(promises) as Image[];
  } catch (error) {
    console.error("Error uploading files:", error);
    return null;
  }
}
