import "../styles/SelectListPage.css";
import { ChangeEvent, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TodoContext } from "../context/TodoContext";

function SelectListPage() {
  const { fetchLists, listOfLists, selectedList, setSelectedList } =
    useContext(TodoContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchLists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onSelect(event: ChangeEvent<HTMLSelectElement>) {
    event.preventDefault();
    setSelectedList(event.target.value);
  }

  function navigateToMain() {
    if (!selectedList) {
      return;
    }

    navigate("/");
  }

  return (
    <>
      <h1>Select a list</h1>
      <div className="dashed-divider" />
      <div className="select-container">
        {listOfLists !== null && (
          <select
            value={selectedList?.id ?? ""}
            onChange={onSelect}
            className="select-list"
          >
            {!selectedList && <option value={""}>Select a list</option>}
            {listOfLists.map((list) => (
              <option value={list.id}>{list.title}</option>
            ))}
          </select>
        )}
      </div>

      <div className="dashed-divider" />

      <button onClick={() => navigate("/list")} id="create-button">
        Create a list
      </button>
      {selectedList !== null && (
        <button onClick={navigateToMain} id="create-button">
          Main Page
        </button>
      )}
      <div className="margin" />
    </>
  );
}

export default SelectListPage;
