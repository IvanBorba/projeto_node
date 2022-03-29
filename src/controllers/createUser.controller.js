import createUserService from "../services/createUser.service";

const createUserController = async (request, response) => {
  const { email, name, password } = request.body;
  try {
    const user = await createUserService(email, name, password);

    return response.json(user);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default createUserController;
