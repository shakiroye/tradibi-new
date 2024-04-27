import { UserSchema } from "~/server/models/user.schema";
import { createUser } from "~/server/service/user";
import { userTransfomer } from "~/server/transformers/user";

export default defineEventHandler(async (event) => {
  const { username, email, password, confirmPassword, name } = await readBody(
    event
  );

  const customError = (code: number, message: string) =>
    sendError(event, createError({ statusCode: code, statusMessage: message }));

  if (!email) return customError(400, "email invalid");
  if (!password) return customError(400, "password invalid");
  if (!confirmPassword) return customError(400, "confirmPassword invalid");
  if (!name) return customError(400, "name invalid");

  if (password !== confirmPassword)
    return customError(400, "Passwords do no match");

  const userData = {
    email,
    password,
    name,
  };

  try {
    const user = await createUser(userData);

    setResponseStatus(event, 201);

    return {
      message: "Register successfully",
      data: userTransfomer(user),
    };
  } catch (error) {
    return error;
  }
});
