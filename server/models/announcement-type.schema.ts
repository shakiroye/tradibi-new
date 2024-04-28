import { defineMongooseModel } from "#nuxt/mongoose";
import mongoose from "mongoose";

export const AnnouncementTypeSchema = defineMongooseModel({
  name: "AnnouncementType",
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
