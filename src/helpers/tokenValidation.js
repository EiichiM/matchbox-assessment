
import jwt from "jsonwebtoken";

export const validateTokenAndGetUserId = async (request) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decodedToken = jwt.verify(token, process.env.jwt_secret);
    return decodedToken._id;
  } catch (error) {
    throw new Error(error.message);
  }
};