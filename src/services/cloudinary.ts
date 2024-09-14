import { CLD_KEY, CLD_NAME, CLD_SECRET } from "@config/env-variables";
import { v2 } from "cloudinary";
import { rm } from "node:fs/promises";
import { Image, RawFile } from "types";

v2.config({
  cloud_name: CLD_NAME,
  api_key: CLD_KEY,
  api_secret: CLD_SECRET,
});

export async function uploadFiles(
  files: Array<RawFile>,
  config?: { folder: string }
): Promise<Image[] | null> {
  const filePaths = files.map((file) => file.tempFilePath);

  try {
    const promisesArray = filePaths.map(
      async (path) => await v2.uploader.upload(path, { folder: config?.folder })
    );

    const imagesArray = await Promise.all(promisesArray);

    return imagesArray.map(({ secure_url, public_id, width, height }) => ({
      secureUrl: secure_url,
      publicId: public_id,
      width,
      height,
    }));
  } catch (error) {
    return null;
  } finally {
    filePaths.forEach(async (path) => await rm(path));
  }
}
