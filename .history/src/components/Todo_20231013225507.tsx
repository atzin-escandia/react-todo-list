import React from "react";
import { TodoType } from "../types";

interface Props extends TodoType {
  onHandleRemove: ({ id }: Pick<TodoType, "id">) => void;
  onToggleCompleted: ({
    id,
    completed,
  }: Pick<TodoType, "id", "completed">) => void;
}

const Todo = ({
  id,
  title,
  completed,
  onHandleRemove,
  onToggleCompleted,
}: Props) => {
  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    onToggleCompleted({ id, completed: event.target.checked });
  };

  return (
    <div className="view">
      <input
        className="toggle"
        checked={completed}
        placeholder="Write a todo"
        type="checkbox"
        onChange={handleChangeCheckbox}
      />
      <label>{title}</label>
      <button className="destroy" onClick={() => onHandleRemove({ id })}>
        {""}
      </button>
    </div>
  );
};

export default Todo;
