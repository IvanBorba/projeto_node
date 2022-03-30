import createPetService from "../services/createPet.service";

const createPetController = async (request, response) => {
  const { owner_id } = request.params;
  const { name, species, breed } = request.body;
  try {
    const pet = await createPetService(name, species, breed, owner_id);

    return response.status(201).json(pet);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default createPetController;
