import { defineMongooseModel } from "#nuxt/mongoose";
import mongoose from "mongoose";

export const AnnouncementSchema = defineMongooseModel({
  name: "Announcement",
  schema: {
    id: {
      type: Number,
      unique: true,
    },
    title: {
      type: "string",
      required: true,
    },
    description: String,
    announcementCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AnnouncementCategory",
      required: true,
    },
  },
});
