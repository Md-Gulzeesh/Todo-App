import { useEffect, useState } from "react";
import { addTodo, deleteTodo, getTodos, toggleTodoStatus } from "./Api";
import Pagination from "./Pagination";
import TodoList from "./TodoList";

function Todo() {
  const [data, setData] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [error, setIsError] = useState(false);
  const [todo, setTodo] = useState("");
  const [page, setPage] = useState(1);
  useEffect(() => {
    handleGetTodos(page);
  }, [page]);
  console.log(data);
  function handleGetTodos(page) {
    setIsLoading(true);
    setIsError(false);
    getTodos(page)
      .then((res) => {
        setData(res.data);
        console.log("Data: ", res.data);
        console.log("Total Length: ", res.data.length);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  }

  function handleAdd(title) {
    if (title !== "" && title.trim() !== "") {
      setIsLoading(true);
      addTodo({
        title,
        status: false,
      }).then(() => handleGetTodos());
      setTodo("");
    } else {
      alert("Todo Item Can't be Empty!!!!");
    }
  }

  function handleToggle(id, newStatus) {
    setIsLoading(true);
    toggleTodoStatus({ id, newStatus }).then(() => handleGetTodos());
  }

  function handleDelete(id) {
    setIsLoading(true);
    deleteTodo(id).then(() => handleGetTodos());
  }
  return loading ? (
    // <img
    //   className="loading"
    //   src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif"
    //   alt="Loading"
    // />
    <div className="loading">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  ) : error ? (
    <img
      className="error"
      src="https://i.gifer.com/CwD0.gif"
      alt="something went wrong"
    />
  ) : (
    <div>
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          className="input"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Write Something..."
          onKeyDownCapture={(e) => {
            if (e.key === "Enter") {
              if (todo !== "") {
                handleAdd(todo);
              } else {
                alert("Todo can't be Empty!");
              }
            }
          }}
        />
        <button className="btn" onClick={() => handleAdd(todo)}>
          <svg
            width="25"
            height="25"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29 3L3 15L15 17.5M29 3L19 29L15 17.5M29 3L15 17.5"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          {data.length === 0 ? (
            <img
              className="empty"
              src="https://thumbs.gfycat.com/AnotherIncredibleDipper-size_restricted.gif"
              alt="Empty"
            />
          ) : (
            <TodoList
              data={data}
              handleDelete={handleDelete}
              handleToggle={handleToggle}
            />
          )}
        </div>
        <Pagination page={page} setPage={setPage} data={data} />
      </div>
    </div>
  );
}

export default Todo;
