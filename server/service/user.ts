import * as bcrypt from "bcrypt";

export const createUser = async (userData: any) => {
  const finalUserData = {
    ...userData,
    password: bcrypt.hashSync(userData.password, 10),
  };

  return await new UserSchema(finalUserData).save();
};

// export const getUserByUsername = (usernameData: string) => {
//   return prisma.user.findUniqueOrThrow({
//     where: {
//       username: usernameData,
//     },
//   });
// };
