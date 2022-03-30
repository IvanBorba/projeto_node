import { Client } from "pg";
const database = new Client({
  user: "ivan",
  host: "localhost",
  database: "banco_usuarios",
  password: "101112",
  port: 5432,
});

export const startDatabase = async () => {
  await database.connect();
};

export default database;
