import { defineMongooseModel } from "#nuxt/mongoose";

export const UserSchema = defineMongooseModel({
  name: "User",
  schema: {
    name: {
      type: "string",
      required: true,
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
