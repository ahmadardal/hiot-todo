import "../styles/AddListPage.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TodoContext } from "../context/TodoContext";

function AddListPage() {
  const [listName, setListName] = useState("");
  const [resultMessage, setResultMessage] = useState<string | null>(null);
  const navigate = useNavigate();
  const { addList } = useContext(TodoContext);

  async function btnAddList() {
    if (listName === "") {
      return;
    }

    addList(listName);

    setListName("");
    setResultMessage("List has been added!");
    navigate("/select");
  }

  return (
    <>
      <h1>Add a list</h1>
      <div className="dashed-divider" />
      <div className="input-section">
        <input
          type="text"
          value={listName}
          onChange={(e) => setListName(e.target.value)}
          id="add-text"
        />
        <button onClick={btnAddList} id="add-button">
          Add List
        </button>
      </div>
      {resultMessage ? <h2 id="result-message">{resultMessage}</h2> : <div />}

      <button onClick={() => navigate("/select")} id="create-button">
        Main Page
      </button>
    </>
  );
}

export default AddListPage;
