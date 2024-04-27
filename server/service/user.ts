import * as bcrypt from "bcrypt";
import { UserDocument } from "../../types";

export const createUser = async (userData: any) => {
  const finalUserData = {
    ...userData,
    password: bcrypt.hashSync(userData.password, 10),
  };

  return await new UserSchema(finalUserData).save();
};

export const getUserByEmail = async (
  emailData: string
): Promise<UserDocument | null> => {
  return await UserSchema.findOne({ email: emailData });
};
