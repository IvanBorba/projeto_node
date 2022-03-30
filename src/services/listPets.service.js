import database from "../database";

const listPetsService = async () => {
  try {
    const res = await database.query("SELECT * FROM pets");
    return res.rows;
  } catch (err) {
    throw new Error(err);
  }
};

export default listPetsService;
