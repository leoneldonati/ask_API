import type { Request } from "express";
import type { ObjectId } from "mongodb";

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
  region: string;
  timezone: string;
}
interface Settings {
  colorScheme: 'dark' | 'light';
}
declare global {
  interface ExtendedReqWithToken extends Request {
    decodedToken?: any;
  }
  interface User {
    _id: ObjectId;
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
    createdAt: Date | string;
    updatedAt: Date | string;
    followers: Array<string>;
    followed: Array<string>;
  }
  interface UserWithoutId extends Omit<User, '_id'> {}

  interface Post {
    _id: ObjectId;
    content: string;
    ownerId: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    images: Array<Image> | null;
    likes: Array<string>;
    comments: Array;
    links: Array<string> | null;
    usersMentioned: Array<string> | null;
  }

  interface PostWithoutId extends Omit<Post, '_id'> {}

}
