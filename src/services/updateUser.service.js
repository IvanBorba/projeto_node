import database from "../database";

const updateUserService = async (id, name, email) => {
  try {
    const res = await database.query(
      "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
      [name, email, id]
    );

    if (res.rows.length === 0) {
      throw "id não corresponde a nenhum usuário";
    }

    return { message: "Usuário atualizado", user: res.rows[0] };
  } catch (err) {
    throw new Error(err);
  }
};

export default updateUserService;
