import express from "express";
import "dotenv/config";
import { startDatabase } from "./database";
import userRouter from "./routes/users.routes";
import petsRouter from "./routes/pets.routes";

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/pets", petsRouter);

app.get("/", (request, response) => {
  return response.json({
    message: "Hello World Kenzie",
  });
});

app.listen(process.env.PORT || 3333, () => {
  startDatabase();
  console.log("Rodando na porta " + process.env.PORT || 3333);
});
