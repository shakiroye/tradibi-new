import { defineMongooseModel } from "#nuxt/mongoose";
import mongoose from "mongoose";

export const AnnouncementSchema = defineMongooseModel({
  name: "Announcement",
  schema: {
    title: {
      type: "string",
      required: true,
    },
    description: String,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    categoryAnnouncementId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AnnouncementCategory",
      required: true,
    },
    typeAnnouncementId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AnnouncementType",
      required: true,
    },
  },
});
