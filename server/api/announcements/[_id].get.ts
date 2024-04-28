import { AnnouncementSchema } from "~/server/models/announcement.schema";

export default defineEventHandler(async (event) => {
  try {
    return await AnnouncementSchema.findOne({
      _id: event.context.params?._id,
    });
  } catch (error) {
    return error;
  }
});
