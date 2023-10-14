import React from "react";
import { TodoType } from "../types";

interface Props extends TodoType {
  onHandleRemove: () => void;
}

const Todo = ({
  id,
  title,
  completed,
  onHandleRemove,
  onToggleCompleted,
}: Props) => {
  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    onToggleCompleted({ id, completed: event.target.value });
  };

  return (
    <div className="view">
      <input
        className="toggle"
        checked={completed}
        placeholder="Write a todo"
        type="checkbox"
        onChange={(e) => handleChangeCheckbox}
      />
      <label>{title}</label>
      <button
        className="destroy"
        onClick={() => {
          onHandleRemove;
        }}
      ></button>
    </div>
  );
};

export default Todo;
