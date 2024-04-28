import { Document } from "mongoose";
export interface UserDocument extends Document {
  email: string;
  password: string;
  name: string;
}

export interface AnnouncementDocument extends Document {
  id: number;
  title: string;
  description: string;
  announcementCategory: string;
}

export interface AnnouncementCategoryDocument extends Document {
  id: number;
  title: string;
  description: string;
  announcements: AnnouncementDocument[];
}
