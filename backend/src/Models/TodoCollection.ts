import { model, Schema } from "mongoose";
import { Todo } from "../TodoService/todo.types";

const TodoSchema = new Schema<Todo>({
  id: { type: String, required: false },
  listId: { type: String, required: true },
  title: { type: String, required: true },
  completed: { type: Boolean, required: true },
});

TodoSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

export const TodoCollection = model<Todo>("Todo", TodoSchema);
