const ListProperties = {
  id: { description: "Unique id of the list", type: "string" },
  title: { description: "Title of the list", type: "string" },
};

export const GetListsSchema = {
  response: {
    200: {
      type: "array",
      description: "List of lists",
      items: {
        type: "object",
        description: "Individual list object",
        properties: ListProperties,
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

export const AddListSchema = {
  body: {
    type: "object",
    description: "The list to create",
    required: ["title"],
    properties: {
      title: { description: "Title of the list", type: "string" },
    },
  },
  response: {
    200: {
      type: "object",
      description: "Status message",
      properties: ListProperties,
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
