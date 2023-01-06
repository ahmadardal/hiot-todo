const TodoProperties = {
  id: { description: "Unique id of the Todo", type: "string" },
  listId: {
    description: "Unique id of the todo list to which this todo belongs",
    type: "string",
  },
  title: { description: "Title of the Todo", type: "string" },
  completed: {
    description: "If the todo has been completed",
    type: "boolean",
  },
};

export const CompleteAllSchema = {
  response: {
    200: {
      type: "string",
      description: "Status message",
    },
    400: {
      type: "string",
      description: "If the client has sent a bad request",
    },
    500: {
      type: "string",
      description: "If the server has an internal error",
    },
  },
};

export const GetTodosSchema = {
  response: {
    200: {
      type: "array",
      description: "List of todos",
      items: {
        type: "object",
        description: "Individual todo object",
        properties: TodoProperties,
      },
    },
    400: {
      type: "string",
      description: "If the client has sent a bad request",
    },
    500: {
      type: "string",
      description: "If the server has an internal error",
    },
  },
};

export const AddTodoSchema = {
  body: {
    type: "object",
    description: "The todo to create",
    required: ["title"],
    properties: {
      title: { description: "Title of the Todo", type: "string" },
    },
  },
  response: {
    200: {
      type: "object",
      description: "Status message",
      properties: TodoProperties,
    },
    400: {
      type: "string",
      description: "If the client has sent a bad request",
    },
    500: {
      type: "string",
      description: "If the server has an internal error",
    },
  },
};

export const UpdateTodoSchema = {
  body: {
    type: "object",
    description: "Todo to update",
    required: ["completed"],
    properties: {
      completed: {
        description: "If the todo has been completed",
        type: "boolean",
      },
    },
  },
  response: {
    200: {
      type: "string",
      description: "Status message",
    },
    400: {
      type: "string",
      description: "If the client has sent a bad request",
    },
    404: {
      type: "string",
      description: "If the todo was not found",
    },
    500: {
      type: "string",
      description: "If the server has an internal error",
    },
  },
};

export const DeleteTodoSchema = {
  response: {
    200: {
      type: "string",
      description: "Status message",
    },
    400: {
      type: "string",
      description: "If the client has sent a bad request",
    },
    404: {
      type: "string",
      description: "If the todo was not found",
    },
    500: {
      type: "string",
      description: "If the server has an internal error",
    },
  },
};
