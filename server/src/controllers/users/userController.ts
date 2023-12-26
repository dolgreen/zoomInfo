import { handleGetUsers } from "../../handlers/users/usersHandler";

export const ctrlGetUsers = async (age: number ) => {
  const users = await handleGetUsers(age);
  return users;
};
