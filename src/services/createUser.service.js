import users from "../database";
import { v4 as uuidv4 } from "uuid";

const createUserService = (email, name) => {
  const userArealdyExists = users.find((user) => user.email === email);

  if (userArealdyExists) {
    return "This email address is already being used";
  }

  const newUser = {
    email,
    name,
    id: uuidv4(),
  };

  users.push(newUser);

  return newUser;
};

export default createUserService;
