import { createAnnouncement } from "~/server/service/announcement";

export default defineEventHandler(async (event) => {
  const {
    title,
    description,
    userId,
    typeAnnouncementId,
    categoryAnnouncementId,
  } = await readBody(event);

  const customError = (code: number, message: string) =>
    sendError(event, createError({ statusCode: code, statusMessage: message }));

  if (!title) return customError(400, "title invalid");

  if (!userId) return customError(400, "userId invalid");

  if (!typeAnnouncementId)
    return customError(400, "announcementTypeId invalid");

  if (!categoryAnnouncementId)
    return customError(400, "announcementCategoryId invalid");

  const announcementData = {
    title,
    description,
    userId,
    typeAnnouncementId,
    categoryAnnouncementId,
  };

  try {
    const announcement = await createAnnouncement(announcementData);

    setResponseStatus(event, 201);

    return {
      message: "Announcement created successfully",
      data: announcement,
    };
  } catch (error) {
    return error;
  }
});
