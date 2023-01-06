import axios from "axios";
import { List, Todo } from "./types";

const AxiosInstance = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-type": "application/json",
  },
});

export async function getAllTodosApi(): Promise<Todo[]> {
  const response = await AxiosInstance.get<Todo[]>("/todos");
  return response.data;
}

export async function getAllTodosByListApi(listId: string): Promise<Todo[]> {
  const response = await AxiosInstance.get<Todo[]>(`/todos/${listId}`);
  return response.data;
}

export async function getListsApi(): Promise<List[]> {
  const response = await AxiosInstance.get<List[]>("/lists");
  return response.data;
}

export async function addListApi(title: string): Promise<List> {
  const response = await AxiosInstance.post<List>("/lists", { title: title });
  return response.data;
}

export async function completeAllApi(listId: string): Promise<boolean> {
  const response = await AxiosInstance.post(`/todos/completeAll/${listId}`);

  if (response.status === 200) {
    return true;
  } else {
    return false;
  }
}

export async function addTodoApi(title: string, listId: string): Promise<Todo> {
  const response = await AxiosInstance.post<Todo>("/todo", {
    title: title,
    listId: listId,
  });

  return response.data;
}

export async function updateTodoApi(
  id: string,
  completed: boolean
): Promise<boolean> {
  const response = await AxiosInstance.put(`/todo/${id}`, {
    completed: completed,
  });

  if (response.status === 200) {
    return true;
  } else {
    return false;
  }
}

export async function deleteTodoApi(id: string): Promise<boolean> {
  const response = await AxiosInstance.delete(`/todo/${id}`);

  if (response.status === 200) {
    return true;
  } else {
    return false;
  }
}
