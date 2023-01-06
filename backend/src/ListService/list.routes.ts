import { FastifyInstance, FastifyPluginOptions } from "fastify";
import * as schemas from "./list.schemas";
import * as controllers from "./list.controllers";

async function ListRoutes(
  server: FastifyInstance,
  options: FastifyPluginOptions
) {
  server.route({
    method: "GET",
    url: "/lists",
    schema: schemas.GetListsSchema,
    handler: controllers.GetListsController,
  });

  server.route({
    method: "POST",
    url: "/lists",
    schema: schemas.AddListSchema,
    handler: controllers.AddListController,
  });
}

export default ListRoutes;
