export interface Todo {
  id: string;
  listId: string;
  title: string;
  completed: boolean;
}

export interface List {
  id: string;
  title: string;
}

export interface AddRequestBody {
  title: string;
  listId: string;
}

export interface UpdateRequestBody {
  completed: boolean;
}

export interface TodoIdParam {
  id: string;
}

export interface ListIdParam {
  listId: string;
}
