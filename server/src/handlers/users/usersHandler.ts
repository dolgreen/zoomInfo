import User from "../../models/Users";
import { IUser } from "../../types/User";

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

export const handleAddUser = async (user: IUser) => {
  try {
    const newUser = new User({
      ...user,
    });

    const document = await User.findOne({ name: user.name });
    if (document) {
      console.log("name is allready been taken");
      return false;
    } else {
      await newUser.save();
      return true;
    }
  } catch (error) {
    console.error("Error retrieving users:", error);
  }
};
