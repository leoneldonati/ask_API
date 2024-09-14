import type { Request } from "express";

export interface RawFile {
  name: string;
  data: Buffer;
  size: number;
  encoding: string;
  tempFilePath: string;
  truncated: boolean;
  mimetype: string;
  md5: string;
}

interface Image {
  secureUrl: string;
  publicId: string;
  width: number;
  height: number;
}
interface Location {
  city: string;
  country: string;
}
interface Settings {
  colorScheme: 'dark' | 'light';
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

  interface UserWithOutId {
    name: string;
    username: string;
    bio: string;
    media: {
      avatar: Image | null;
      frontPage: Image | null;
    };
    dateOfBirth: Date;
    email: string;
    hash: string;
    isVerified: boolean;
    location: Location;
    settings: Settings;
    createdAt: Date;
    updatedAt: Date;
    followers: Array<string>;
    followed: Array<string>;
  }
}
