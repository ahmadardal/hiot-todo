import dotenv from "dotenv";
import path from "path";

const dirname: string = path.resolve();

dotenv.config({ path: path.resolve(dirname, ".env") });

if (!process.env.NODE_ENV) {
  throw "No valid environment set!";
}

const NODE_ENV = process.env.NODE_ENV;

const envPath: string = path.resolve(dirname, `.env.${NODE_ENV}`);

dotenv.config({ path: envPath });

if (!process.env.DB_URL) {
  throw "No DB URL was found!";
}

const PORT = Number(process.env.PORT);

const environment = {
  NODE_ENV,
  PORT: PORT,
  DB_URL: process.env.DB_URL,
};

export default environment;
