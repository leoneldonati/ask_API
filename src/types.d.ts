import type { Request } from "express";

interface Image {
  secureUrl: string;
  publicId: string;
}
declare global {
  interface ExtendedReqWithToken extends Request {
    decodedToken?: any;
  }

  interface PostWithOutId {
    content: string;
    ownerId: string;
    createdAt: Date;
    updatedAt: Date;
    images: Array<Image> | null;
    likes: Array<string>;
    comments: Array;
    links: Array<string> | null;
    usersMentioned: Array<string> | null;
  }
}
