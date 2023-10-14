import { TodoType } from "../types";

const Todo = ({ id, title, completed, onHandleRemove }: TodoType) => {
  // const setCreateTodo = () => {};

  return (
    <div className="view">
      <input
        className="toggle"
        checked={true}
        placeholder="Write a todo"
        onChange={(e) => e.target.value}
        type="checkbox"
      />
      <label htmlFor="">{title}</label>
      <button className="destroy"></button>
    </div>
  );
};

export default Todo;
