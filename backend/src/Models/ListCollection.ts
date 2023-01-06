import { model, Schema } from "mongoose";
import { List } from "../TodoService/todo.types";

const ListSchema = new Schema<List>({
  id: { type: String, required: false },
  title: { type: String, required: true },
});

ListSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

export const ListCollection = model<List>("List", ListSchema);
