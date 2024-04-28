import { createAnnouncementCategory } from "~/server/service/announcement-category";

export default defineEventHandler(async (event) => {
  const { title, description } = await readBody(event);

  const customError = (code: number, message: string) =>
    sendError(event, createError({ statusCode: code, statusMessage: message }));

  if (!title) return customError(400, "title invalid");

  const announcementCategoryData = {
    title,
    description,
  };

  try {
    const announcementCategory = await createAnnouncementCategory(
      announcementCategoryData
    );

    setResponseStatus(event, 201);

    return {
      message: "Announcement category created successfully",
      data: announcementCategory,
    };
  } catch (error) {
    return error;
  }
});
