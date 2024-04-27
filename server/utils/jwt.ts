import jwt from "jsonwebtoken";

const generateAccessToken = (user: any) => {
  const config = useRuntimeConfig();
  console.log(config.jwtAccessSecret);

  return jwt.sign(user.toJSON(), config.jwtAccessSecret, {
    expiresIn: 2592000,
  });
};

const generateRefreshToken = (user: any) => {
  const config = useRuntimeConfig();

  return jwt.sign(user, config.jwtRefreshSecret, {
    expiresIn: "4h",
  });
};

export const generateTokens = (user: any) => {
  const accessToken = generateAccessToken(user);
  // const refreshToken = generateRefreshToken(user);
  return {
    accessToken: accessToken,
    // refreshToken: refreshToken,
  };
};

export const sendRefreshToken = (event: any, token: string) => {
  setCookie(event, "refresh_token", token, {
    httpOnly: true,
    sameSite: true,
  });
};
