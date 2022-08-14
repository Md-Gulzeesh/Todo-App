import TodoItem from "./TodoItem";

const TodoList = ({ data, handleDelete, handleToggle }) => {
  return (
    <div>
      {data?.map((item) => (
        <TodoItem
          key={item.id}
          title={item.title}
          id={item.id}
          status={item.status}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
