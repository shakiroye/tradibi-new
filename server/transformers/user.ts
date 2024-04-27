export const userTransfomer = (user: any) => {
  return {
    id: user.id,
    username: user.username,
    email: user.email,
    name: user.name,
  };
};
