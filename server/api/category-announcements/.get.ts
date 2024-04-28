import { AnnouncementCategorySchema } from "~/server/models/announcement-category.schema";

export default defineEventHandler(async (event) => {
  try {
    return await AnnouncementCategorySchema.find({}).populate("announcements");
  } catch (error) {
    return error;
  }
});
