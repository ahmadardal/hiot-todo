import { FastifyInstance, FastifyPluginOptions } from "fastify";
import TodoRoutes from "./todo.routes";

async function TodoService(
  server: FastifyInstance,
  options: FastifyPluginOptions
) {
  await server.register(TodoRoutes);
}

export default TodoService;
