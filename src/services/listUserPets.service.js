import database from "../database";

const listUsersPetsService = async (owner_id) => {
  try {
    const res = await database.query("SELECT * FROM pets WHERE owner_id = $1", [
      owner_id,
    ]);
    return res.rows;
  } catch (err) {
    throw new Error(err);
  }
};

export default listUsersPetsService;
