import { FastifyRequest, FastifyReply } from "fastify";
import {
  AddRequestBody,
  Todo,
  UpdateRequestBody,
  TodoIdParam,
  ListIdParam,
} from "./todo.types";
import mongoose from "mongoose";

export async function AddTodoController(
  request: FastifyRequest<{ Body: AddRequestBody }>,
  reply: FastifyReply
) {
  const { TodoCollection } = request.db.models;

  const newTodo = {
    listId: request.body.listId,
    title: request.body.title,
    completed: false,
  };

  const addedTodo = (await TodoCollection.create(newTodo)) as Todo;

  return await reply.status(201).send(addedTodo);
}

export async function UpdateTodoController(
  request: FastifyRequest<{
    Body: UpdateRequestBody;
    Params: TodoIdParam;
  }>,
  reply: FastifyReply
) {
  if (!mongoose.isValidObjectId(request.params.id)) {
    return await reply.status(400).send("Invalid id was sent!");
  }

  const { TodoCollection } = request.db.models;

  const todoExists: Todo = (await TodoCollection.findById(
    request.params.id
  )) as Todo;

  if (todoExists === null) {
    return await reply
      .status(404)
      .send(`No todo was found with id ${request.params.id}!`);
  }

  todoExists.completed = request.body.completed;

  await TodoCollection.findByIdAndUpdate(request.params.id, todoExists, {
    new: true,
  });

  return await reply.status(200).send("Success!");
}

export async function CompleteAllController(
  request: FastifyRequest<{ Params: ListIdParam }>,
  reply: FastifyReply
) {
  const { TodoCollection } = request.db.models;

  await TodoCollection.updateMany(
    { listId: request.params.listId },
    { $set: { completed: true } }
  );

  return await reply.status(200).send("Success!");
}

export async function GetTodosListController(
  request: FastifyRequest<{ Params: ListIdParam }>,
  reply: FastifyReply
) {
  const { TodoCollection } = request.db.models;

  const todoList: Todo[] = (await TodoCollection.find({
    listId: request.params.listId,
  })) as Todo[];

  return await reply.status(200).send(todoList);
}

export async function GetTodosController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { TodoCollection } = request.db.models;

  const todoList: Todo[] = (await TodoCollection.find({})) as Todo[];

  return await reply.status(200).send(todoList);
}

export async function DeleteTodoController(
  request: FastifyRequest<{ Params: TodoIdParam }>,
  reply: FastifyReply
) {
  if (!mongoose.isValidObjectId(request.params.id)) {
    return await reply.status(400).send("Invalid id was sent!");
  }

  const { TodoCollection } = request.db.models;

  const deletedTodo = await TodoCollection.findByIdAndDelete(request.params.id);

  if (deletedTodo === null) {
    return await reply
      .status(404)
      .send(`No todo was found with id ${request.params.id}!`);
  }

  return await reply.status(200).send("Todo has been deleted!");
}
