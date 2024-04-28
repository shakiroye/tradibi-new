import { AnnouncementCategorySchema } from "~/server/models/announcement-category.schema";

export default defineEventHandler(async (event) => {
  try {
    return await AnnouncementCategorySchema.find({});
  } catch (error) {
    return error;
  }
});
