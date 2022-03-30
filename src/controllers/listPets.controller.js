import listPetsService from "../services/listPets.service";

const listPetsController = async (request, response) => {
  try {
    const pets = await listPetsService();

    return response.json(pets);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default listPetsController;
