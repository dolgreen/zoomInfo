import { handleGetUsers } from "../../handlers/users/usersHandler";

export const ctrlGetUsers = async () => {
  const users = await handleGetUsers();
  return users;
};
