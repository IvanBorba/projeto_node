import listUserPetsService from "../services/listUserPets.service";

const listUserPetsController = async (request, response) => {
  const { owner_id } = request.params;

  try {
    const pets = await listUserPetsService(owner_id);

    return response.json(pets);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default listUserPetsController;
