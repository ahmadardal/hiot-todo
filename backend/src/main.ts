import fastify, { FastifyInstance } from "fastify";
import database, { Db } from "./Utilities/db";
import environment from "./Utilities/environment";
import TodoService from "./TodoService/todo.index";
import cors from "@fastify/cors";
import ListService from "./ListService/list.index";

declare module "fastify" {
  interface FastifyRequest {
    db: Db;
  }
}

const server: FastifyInstance = fastify({ logger: true });

async function start() {
  await server.register(cors, {
    // put your options here
  });
  await server.register(database);
  await server.register(ListService);
  await server.register(TodoService);

  server.listen(
    { port: environment.PORT, host: "0.0.0.0" },
    (error: Error | null, address: string) => {
      if (error) {
        server.log.error(error.message);
        process.exit(1);
      }

      console.log("=================================");
      console.log(`======= ENV: ${environment.NODE_ENV} =======`);
      console.log(`🚀 App listening on ${address}`);
      console.log("=================================");
    }
  );
}

start();
