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
