import { AnnouncementSchema } from "~/server/models/announcement.schema";

export default defineEventHandler(async (event) => {
  try {
    await AnnouncementSchema.findOneAndDelete({
      _id: event.context.params?._id,
    });

    return {
      message: "Deleted successfully",
    };
  } catch (error) {
    return error;
  }
});
