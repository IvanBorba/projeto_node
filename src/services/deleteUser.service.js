import database from "../database";

const deleteUserService = async (id) => {
  try {
    const res = await database.query(
      "DELETE FROM users WHERE id = $1 RETURNING *",
      [id]
    );

    if (res.rows.length === 0) {
      throw "id não corresponde a nenhum usuário";
    }

    return "Usuário deletado";
  } catch (err) {
    throw new Error(err);
  }
};

export default deleteUserService;
