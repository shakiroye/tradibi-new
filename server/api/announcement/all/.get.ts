import { AnnouncementSchema } from "~/server/models/announcement.schema";

export default defineEventHandler(async (event) => {
  try {
    return await AnnouncementSchema.find({});
  } catch (error) {
    return error;
  }
});
