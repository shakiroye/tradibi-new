import * as bcrypt from "bcrypt";
import { getUserByEmail } from "../../service/user";
import { generateTokens, sendRefreshToken } from "../../utils/jwt";
import { userTransfomer } from "~/server/transformers/user";
// import { createRefreshToken } from "~/server/service/refreshToken";

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event);

  const customError = (code: number, message: string) =>
    sendError(event, createError({ statusCode: code, statusMessage: message }));

  if (!email) return customError(400, "username invalid");
  if (!password) return customError(400, "password invalid");

  const user = await getUserByEmail(email);

  if (!user) return customError(400, "user not found");

  const doesPasswordMatch = await bcrypt.compare(password, user.password);

  if (!doesPasswordMatch) return customError(400, "Password invalid");

  const { accessToken } = generateTokens(user);

  // await createRefreshToken({
  //   token: refreshToken,
  //   userId: user.id,
  // });

  // sendRefreshToken(event, refreshToken);

  return {
    access_token: accessToken,
    user: userTransfomer(user),
  };
});
