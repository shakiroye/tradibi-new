import { Document } from "mongoose";
export interface UserDocument extends Document {
  email: string;
  password: string;
  name: string;
}

export interface AnnouncementDocument extends Document {
  title: string;
  description: string;
  categoryAnnouncementId: string;
  typeAnnouncementId: string;
}

export interface AnnouncementCategoryDocument extends Document {
  title: string;
  description: string;
  announcements: AnnouncementDocument[];
}
export interface AnnouncementTypeDocument extends Document {
  title: string;
  description: string;
  announcements: AnnouncementDocument[];
}
