import { AnnouncementTypeSchema } from "~/server/models/announcement-type.schema";

export default defineEventHandler(async (event) => {
  try {
    await AnnouncementTypeSchema.findOneAndDelete({
      _id: event.context.params?._id,
    });

    return {
      message: "Deleted successfully",
    };
  } catch (error) {
    return error;
  }
});
