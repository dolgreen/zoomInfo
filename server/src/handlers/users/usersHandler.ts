import User from "../../models/Users";
// import { IUser } from "../../types/User";

export const handleGetUsers = async () => {
  try {
    const users = await User.find({});
    if (users) {
      return users;
    }
  } catch (error) {
    console.error("Error retrieving users:", error);
  }
};
