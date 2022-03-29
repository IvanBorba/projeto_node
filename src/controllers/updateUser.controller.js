import updateUserService from "../services/updateUser.service";

const updateUserController = async (request, response) => {
  const { id } = request.params;
  const { name, email } = request.body;

  try {
    const updatedUser = await updateUserService(id, name, email);

    return response.json(updatedUser);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default updateUserController;
