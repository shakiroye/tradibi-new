// https://nuxt.com/docs/guide/directory-structure/server
export default defineEventHandler(async (event) => {
  const { name } = await readBody(event);
  try {
    return await UserSchema.findOneAndUpdate(
      { _id: event.context.params?._id },
      { name },
      { new: true }
    );
  } catch (error) {
    return error;
  }
});
