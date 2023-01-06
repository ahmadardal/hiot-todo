import { FastifyInstance, FastifyPluginOptions } from "fastify";
import * as schemas from "./todo.schemas";
import * as controllers from "./todo.controllers";

async function TodoRoutes(
  server: FastifyInstance,
  options: FastifyPluginOptions
) {
  server.route({
    method: "GET",
    url: "/todos",
    schema: schemas.GetTodosSchema,
    handler: controllers.GetTodosController,
  });

  server.route({
    method: "GET",
    url: "/todos/:listId",
    schema: schemas.GetTodosSchema,
    handler: controllers.GetTodosListController,
  });

  server.route({
    method: "POST",
    url: "/todo",
    schema: schemas.AddTodoSchema,
    handler: controllers.AddTodoController,
  });

  server.route({
    method: "POST",
    url: "/todos/completeAll/:listId",
    schema: schemas.CompleteAllSchema,
    handler: controllers.CompleteAllController,
  });

  server.route({
    method: "PUT",
    url: "/todo/:id",
    schema: schemas.UpdateTodoSchema,
    handler: controllers.UpdateTodoController,
  });

  server.route({
    method: "DELETE",
    url: "/todo/:id",
    schema: schemas.DeleteTodoSchema,
    handler: controllers.DeleteTodoController,
  });
}

export default TodoRoutes;
