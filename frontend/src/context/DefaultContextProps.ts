import { TodoContextProps } from "../utils/types";

const defaultContextProps: TodoContextProps = {
  todosList: [],
  listOfLists: [],
  selectedList: null,
  setSelectedList: (listId: string) => {},
  fetchLists: async () => {},
  addList: (title) => {},
  fetchTodos: async () => {},
  addTodo: (title) => {},
  deleteTodo: (todoId) => {},
  switchComplete: (todoId, completed) => {},
  completeAll: () => {},
};

export default defaultContextProps;
