import deleteUserService from "../services/deleteUser.service";

const deleteUserController = async (request, response) => {
  const { id } = request.params;

  try {
    const deletedUser = await deleteUserService(id);

    return response.json(deletedUser);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default deleteUserController;
