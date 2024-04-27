import { defineMongooseModel } from "#nuxt/mongoose";

export const UserSchema = defineMongooseModel({
  name: "User",
  schema: {
    name: {
      type: "string",
      required: true,
    },
    username: {
      type: "string",
      required: true,
      unique: true,
    },
    email: {
      type: "string",
      required: true,
      unique: true,
    },
    password: {
      type: "string",
      required: true,
    },
  },
});
