import "../styles/MainPage.css";
import { useContext, useEffect, useState } from "react";
import TodoRow from "../components/TodoRow";
import { TodoContext } from "../context/TodoContext";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const [todoTitle, setTodoTitle] = useState<string>("");
  const [remaining, setRemaining] = useState<number>(0);
  const { todosList, selectedList, fetchTodos, addTodo, completeAll } =
    useContext(TodoContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedList) {
      navigate("/select");
      return;
    }

    fetchTodos();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const count = todosList.filter((todo) => !todo.completed).length;

    setRemaining(count);
  }, [todosList]);

  function btnAddTodo() {
    if (todoTitle === "") {
      return;
    }

    addTodo(todoTitle);
    setTodoTitle("");
  }

  return (
    <>
      <h1>Todos</h1>
      <p className="quantity-text margin">
        List name: {selectedList?.title ?? "N/A"}
      </p>
      <div className="dashed-divider" />
      <div className="input-section">
        <input
          type="text"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
          id="add-text"
        />
        <button onClick={btnAddTodo} id="add-button">
          Add Todo
        </button>
      </div>
      <div className="todo-section">
        {todosList.map((e) => (
          <TodoRow key={e.id} todo={e} />
        ))}
      </div>
      <div className="dashed-divider" />
      <div className="footer-section">
        <p className="quantity-text">{remaining} items left</p>
        <p onClick={completeAll} className="quantity-text completeall">
          Mark all as complete
        </p>
      </div>
      <button onClick={() => navigate("/select")} id="create-button">
        Change list
      </button>
      <div className="margin" />
    </>
  );
}

export default MainPage;
