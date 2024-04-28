import { AnnouncementCategorySchema } from "~/server/models/announcement-category.schema";

export default defineEventHandler(async (event) => {
  try {
    return await AnnouncementCategorySchema.findOne({
      _id: event.context.params?._id,
    }).populate("announcements");
  } catch (error) {
    return error;
  }
});
