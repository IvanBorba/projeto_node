import database from "../database";

const verifyEmailAvailabilityMiddleware = async (request, response, next) => {
  const { email } = request.body;

  try {
    const res = await database.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (res.rows.length > 0) {
      return response
        .status(400)
        .json({ message: "This email address is already being used" });
    }
    next();
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default verifyEmailAvailabilityMiddleware;
