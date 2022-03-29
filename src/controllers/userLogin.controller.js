import userLoginService from "../services/userLogin.service";

const userLoginController = async (request, response) => {
  const { email, password } = request.body;

  try {
    const userLogin = await userLoginService(email, password);

    return response.json(userLogin);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default userLoginController;
