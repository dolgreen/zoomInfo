import { IUser } from './../../types/User';
import { handleAddUser, handleGetUsers } from "../../handlers/users/usersHandler";

export const ctrlGetUsers = async () => {
  const users = await handleGetUsers();
  return users;
};

export const ctrlAddUser = async (user: IUser) => {
  const result = await handleAddUser(user);
  return result

}
