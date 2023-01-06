import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyReply,
  FastifyRequest,
} from "fastify";
import fastifyPlugin from "fastify-plugin";
import mongoose, { Model } from "mongoose";
import { List, Todo } from "../TodoService/todo.types";
import environment from "./environment";
import { TodoCollection } from "../Models/TodoCollection";
import { ListCollection } from "../Models/ListCollection";

export interface Models {
  ListCollection: Model<List>;
  TodoCollection: Model<Todo>;
}

export interface Db {
  models: Models;
}

async function database(
  server: FastifyInstance,
  options: FastifyPluginOptions
) {
  mongoose.set("strictQuery", true);

  mongoose.set("toJSON", {
    virtuals: true,
  });

  mongoose.connection.on("connected", () => {
    server.log.info("MongoDB connected!");
  });

  mongoose.connection.on("disconnected", () => {
    server.log.info("Mongo DB disconnected!");
  });

  await mongoose.connect(environment.DB_URL);

  const models: Models = { TodoCollection, ListCollection };

  server.addHook(
    "onRequest",
    async (request: FastifyRequest, reply: FastifyReply) => {
      request.db = { models };
    }
  );
}

export default fastifyPlugin(database);
