import { AnnouncementSchema } from "~/server/models/announcement.schema";

// https://nuxt.com/docs/guide/directory-structure/server
export default defineEventHandler(async (event) => {
  const { title } = await readBody(event);
  try {
    return await AnnouncementSchema.findOneAndUpdate(
      { _id: event.context.params?._id },
      { title },
      { new: true }
    );
  } catch (error) {
    return error;
  }
});
