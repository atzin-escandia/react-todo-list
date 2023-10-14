import React, { useState } from "react";
import { Todo } from "../types";

const Todo = () => {
  const [value, setValue] = useState(null);

  // const setCreateTodo = ({ id, title, completed }: Todo) => {};

  return (
    <div className="view">
      <input
        className="toggle"
        checked={true}
        placeholder="Write a todo"
        onChange={(e) => e.target.value}
        type="checkbox"
      />
      <button className="destroy"></button>
    </div>
  );
};

export default Todo;
