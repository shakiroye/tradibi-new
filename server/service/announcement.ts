import { AnnouncementDocument } from "../../types";

export const createAnnouncement = async (announcementData: any) => {
  const finalAnnouncementData = {
    ...announcementData,
  };

  return await new AnnouncementSchema(finalAnnouncementData).save();
};

export const getAnnouncementByTitle = async (
  titleData: string
): Promise<AnnouncementDocument | null> => {
  return await AnnouncementSchema.findOne({ title: titleData });
};
