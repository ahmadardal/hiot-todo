import { FastifyInstance, FastifyPluginOptions } from "fastify";
import ListRoutes from "./list.routes";

async function ListService(
  server: FastifyInstance,
  options: FastifyPluginOptions
) {
  await server.register(ListRoutes);
}

export default ListService;
