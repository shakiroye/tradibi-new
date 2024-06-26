import { AnnouncementTypeSchema } from "~/server/models/announcement-type.schema";

export default defineEventHandler(async (event) => {
  try {
    return await AnnouncementTypeSchema.findOne({
      _id: event.context.params?._id,
    }).populate("announcements");
  } catch (error) {
    return error;
  }
});
