export interface TodoContextProps {
  todosList: Todo[];
  listOfLists: List[];
  selectedList: List | null;
  setSelectedList: (listId: string) => void;
  fetchLists: () => Promise<void>;
  addList: (title: string) => void;
  fetchTodos: () => Promise<void>;
  addTodo: (title: string) => void;
  deleteTodo: (todoId: string) => void;
  switchComplete: (todoId: string, completed: boolean) => void;
  completeAll: () => void;
}

export interface Todo {
  id: string;
  listId: string;
  title: string;
  completed: boolean;
}

export type List = {
  id: string;
  title: string;
};

// export interface APIResponse {
//   success: boolean;
//   message: string;
// }

export interface Error {
  status: number;
  // message: string;
}

export interface TodoRowProps {
  todo: Todo;
}
