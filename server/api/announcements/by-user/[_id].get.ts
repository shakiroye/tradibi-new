import { AnnouncementSchema } from "~/server/models/announcement.schema";
export default defineEventHandler(async (event) => {
  console.log(event.context.params?._id);

  try {
    const announcementsByUser = await AnnouncementSchema.find({
      userId: event.context.params?._id,
    });
    return announcementsByUser;
  } catch (error) {
    throw error;
  }
});
