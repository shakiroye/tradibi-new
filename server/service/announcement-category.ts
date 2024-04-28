import { AnnouncementCategoryDocument } from "../../types";

export const createAnnouncementCategory = async (
  announcementCategoryData: any
) => {
  const finalAnnouncementCategoryData = {
    ...announcementCategoryData,
  };

  return await new AnnouncementCategorySchema(
    finalAnnouncementCategoryData
  ).save();
};

export const getAnnouncementCategoryByTitle = async (
  titleData: string
): Promise<AnnouncementCategoryDocument | null> => {
  return await AnnouncementCategorySchema.findOne({ title: titleData });
};
