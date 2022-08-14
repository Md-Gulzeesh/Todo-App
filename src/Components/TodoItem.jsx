import { ImCross } from "react-icons/im";
const TodoItem = ({ handleDelete, title, id, status, handleToggle }) => {
  return (
    <div className="todoItem">
      <input
        type="checkbox"
        checked={status}
        onChange={() => {
          handleToggle(id, !status);
        }}
      />
      <div className={status ? "striked" : ""}>
        <h2 className="title">{title}</h2>
      </div>
      <button className="deleteBtn">
        <ImCross className="deleteIcon" onClick={() => handleDelete(id)} />
      </button>
    </div>
  );
};

export default TodoItem;
