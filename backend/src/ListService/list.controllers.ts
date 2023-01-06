import { FastifyRequest, FastifyReply } from "fastify";
import { AddListBody, List } from "./list.types";

export async function AddListController(
  request: FastifyRequest<{ Body: AddListBody }>,
  reply: FastifyReply
) {
  const { ListCollection } = request.db.models;

  const existingList: List[] = await ListCollection.find({
    title: request.body.title,
  });

  if (existingList.length > 0) {
    return await reply
      .status(400)
      .send(`A list with the title ${request.body.title} already exists!`);
  }

  const addedList: List = await ListCollection.create({
    title: request.body.title,
  });

  return await reply.status(201).send(addedList);
}

export async function GetListsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { ListCollection } = request.db.models;

  const listOfLists: List[] = (await ListCollection.find({})) as List[];

  return await reply.status(200).send(listOfLists);
}
