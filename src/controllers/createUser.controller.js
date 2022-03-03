import createUserService from "../services/createUser.service";

const createUserController = async (request, response) => {
  const { email, name, password } = request.body;

  const user = await createUserService(email, name, password);

  return response.json(user);
};

export default createUserController;
