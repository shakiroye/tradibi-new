import { AnnouncementTypeSchema } from "~/server/models/announcement-type.schema";

export default defineEventHandler(async (event) => {
  try {
    return await AnnouncementTypeSchema.find({}).populate("announcements");
  } catch (error) {
    return error;
  }
});
