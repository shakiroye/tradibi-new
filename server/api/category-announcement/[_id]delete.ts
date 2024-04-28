import { AnnouncementCategorySchema } from "~/server/models/announcement-category.schema";

export default defineEventHandler(async (event) => {
  try {
    await AnnouncementCategorySchema.findOneAndDelete({
      _id: event.context.params?._id,
    });

    return {
      message: "Deleted successfully",
    };
  } catch (error) {
    return error;
  }
});
