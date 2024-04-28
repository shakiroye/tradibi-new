import { defineMongooseModel } from "#nuxt/mongoose";
import mongoose from "mongoose";

export const AnnouncementCategorySchema = defineMongooseModel({
  name: "AnnouncementCategory",
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
    announcements: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Announcement",
      },
    ],
  },
});
