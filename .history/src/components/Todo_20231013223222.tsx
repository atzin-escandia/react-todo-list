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
    event.target.value;
  };

  return (
    <div className="view">
      <input
        className="toggle"
        checked={true}
        placeholder="Write a todo"
        type="checkbox"
        onChange={(e) => handleChangeCheckbox}
      />
      <label htmlFor="">{title}</label>
      <button
        className="destroy"
        onClick={() => {
          onHandleRemove(id);
        }}
      ></button>
    </div>
  );
};

export default Todo;