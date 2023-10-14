import { TodoType } from "../types";

interface Props extends TodoType {
  onHandleRemove: () => void;
}

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
      <button className="destroy" onClick={() => {}}></button>
    </div>
  );
};

export default Todo;
