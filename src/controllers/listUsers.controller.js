import listUsersService from "../services/listUsers.service";

const listUsersController = async (request, response) => {
  try {
    const users = await listUsersService();

    return response.json(users);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default listUsersController;
