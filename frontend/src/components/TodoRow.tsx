import "../styles/TodosRow.css";
import { TodoRowProps } from "../utils/types";
import removeLogo from "../assets/remove.png";
import { TodoContext } from "../context/TodoContext";
import { useContext } from "react";

function TodoRow({ todo }: TodoRowProps) {
  const { switchComplete, deleteTodo } = useContext(TodoContext);

  function checkSwitch() {
    switchComplete(todo.id, !todo.completed);
  }

  async function btnDelete() {
    deleteTodo(todo.id);
  }

  return (
    <div className="row-container">
      <div className="hehe">
        <input
          readOnly={true}
          type="checkbox"
          checked={todo.completed}
          onClick={checkSwitch}
          id="checkbox-row"
        />
        <p className={`row-text ${todo.completed ? "completed" : ""}`}>
          {todo.title}
        </p>
      </div>
      <img src={removeLogo} onClick={btnDelete} alt="remove" id="remove-logo" />
    </div>
  );
}

export default TodoRow;
