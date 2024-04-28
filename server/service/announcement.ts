import { AnnouncementDocument } from "../../types";

export const createAnnouncement = async (
  announcementData: any
): Promise<any> => {
  try {
    const newAnnouncement = await new AnnouncementSchema(
      announcementData
    ).save();

    await AnnouncementTypeSchema.findByIdAndUpdate(
      announcementData.typeAnnouncementId,
      { $push: { announcements: newAnnouncement._id } },
      { new: true }
    );

    await AnnouncementCategorySchema.findByIdAndUpdate(
      announcementData.categoryAnnouncementId,
      { $push: { announcements: newAnnouncement._id } },
      { new: true }
    );

    await UserSchema.findByIdAndUpdate(
      announcementData.userId,
      { $push: { announcements: newAnnouncement._id } },
      { new: true }
    );

    return newAnnouncement;
  } catch (error) {
    throw new Error(`Failed to create announcement: ${error}`);
  }
};

export const getAnnouncementById = async (
  announcementId: string
): Promise<any> => {
  try {
    return await AnnouncementSchema.findById(announcementId)
      .populate("typeAnnouncementId")
      .exec();
  } catch (error) {
    throw new Error(`Failed to get announcement by ID: ${error}`);
  }
};
