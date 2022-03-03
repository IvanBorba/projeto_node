import users from "../database";

const verifyEmailAvailabilityMiddleware = (request, response, next) => {
  const { email } = request.body;

  const userArealdyExists = users.find((user) => user.email === email);

  if (userArealdyExists) {
    return response
      .status(400)
      .json({ message: "This email address is already being used" });
  }
  next();
};

export default verifyEmailAvailabilityMiddleware;
