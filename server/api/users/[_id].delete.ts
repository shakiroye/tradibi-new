export default defineEventHandler(async (event) => {
  try {
    await UserSchema.findOneAndDelete({
      _id: event.context.params?._id,
    });

    return {
      message: " Category deleted successfully",
    };
  } catch (error) {
    return error;
  }
});
