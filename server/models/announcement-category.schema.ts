import { defineMongooseModel } from "#nuxt/mongoose";
import mongoose from "mongoose";
import { Schema } from "mongoose";

export const AnnouncementCategorySchema = defineMongooseModel({
  name: "AnnouncementCategory",
  schema: {
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
