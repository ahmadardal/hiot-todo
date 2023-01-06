import { createContext, useState } from "react";
import {
  addListApi,
  addTodoApi,
  completeAllApi,
  deleteTodoApi,
  getAllTodosByListApi,
  getListsApi,
  updateTodoApi,
} from "../utils/api";
import { List, Todo, TodoContextProps } from "../utils/types";
import defaultContextProps from "./DefaultContextProps";

export const TodoContext = createContext<TodoContextProps>(defaultContextProps);

const TodoContextProvider = (props: any) => {
  const [todosList, setTodosList] = useState<Todo[]>([]);
  const [listOfLists, setListOfLists] = useState<List[]>([]);
  const [selectedList, setSelectedList] = useState<List | null>(null);

  async function fetchLists() {
    const response: List[] = await getListsApi();

    setListOfLists(response);
  }

  async function addList(title: string) {
    const response: List = await addListApi(title);

    setListOfLists([...listOfLists, response]);
  }

  async function fetchTodos() {
    if (selectedList) {
      let todos = await getAllTodosByListApi(selectedList.id);
      setTodosList(todos);
    }
  }

  async function addTodo(title: string) {
    if (!selectedList) {
      return;
    }

    const response: Todo = await addTodoApi(title, selectedList.id);

    setTodosList([...todosList, response]);
  }

  async function deleteTodo(todoId: string) {
    const response: boolean = await deleteTodoApi(todoId);

    if (response) {
      setTodosList(todosList.filter((todo) => todo.id !== todoId));
    }
  }

  async function switchComplete(todoId: string, completed: boolean) {
    const response = await updateTodoApi(todoId, completed);

    if (response) {
      setTodosList(
        todosList.map((todo) =>
          todo.id === todoId ? { ...todo, completed: completed } : todo
        )
      );
    }
  }

  async function completeAll() {
    if (!selectedList) {
      return;
    }

    const response = await completeAllApi(selectedList.id);

    if (response) {
      setTodosList(todosList.map((todo) => ({ ...todo, completed: true })));
    }
  }

  function selectList(listId: string) {
    const foundList: List | undefined = listOfLists.find(
      (list) => list.id === listId
    );

    if (foundList) {
      setSelectedList(foundList);
    }
  }

  return (
    <TodoContext.Provider
      value={{
        todosList: todosList,
        listOfLists: listOfLists,
        selectedList: selectedList,
        setSelectedList: (listId: string) => selectList(listId),
        fetchLists: () => fetchLists(),
        addList: (title) => addList(title),
        fetchTodos: () => fetchTodos(),
        addTodo: (title) => addTodo(title),
        deleteTodo: (todoId) => deleteTodo(todoId),
        switchComplete: (todoId, completed) =>
          switchComplete(todoId, completed),
        completeAll: () => completeAll(),
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
