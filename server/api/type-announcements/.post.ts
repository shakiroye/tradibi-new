import { createAnnouncementType } from "~/server/service/announcement-type";

export default defineEventHandler(async (event) => {
  const { title, description } = await readBody(event);

  const customError = (code: number, message: string) =>
    sendError(event, createError({ statusCode: code, statusMessage: message }));

  if (!title) return customError(400, "title invalid");

  const announcementTypeData = {
    title,
    description,
  };

  try {
    const announcementType = await createAnnouncementType(announcementTypeData);

    setResponseStatus(event, 201);

    return {
      message: "Announcement type created successfully",
      data: announcementType,
    };
  } catch (error) {
    return error;
  }
});
