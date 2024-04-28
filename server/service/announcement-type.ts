import { AnnouncementTypeDocument } from "../../types";
import { AnnouncementTypeSchema } from "../models/announcement-type.schema";

export const createAnnouncementType = async (announcementTypeData: any) => {
  const finalAnnouncementTypeData = {
    ...announcementTypeData,
  };

  return await new AnnouncementTypeSchema(finalAnnouncementTypeData).save();
};

export const getAnnouncementTypeByTitle = async (
  titleData: string
): Promise<AnnouncementTypeDocument | null> => {
  return await AnnouncementTypeSchema.findOne({ title: titleData });
};
