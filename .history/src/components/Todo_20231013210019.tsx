import React, { useState } from "react";

const Todo = () => {
  const [value, setValue] = useState(null);

  const setCreateTodo = ({ input }) => {};

  return (
    <div className="view">
      <input
        className="toggle"
        checked={completed}
        placeholder="Write a todo"
        onChange={(e) => setCreateTodo(e.target.value)}
        type="checkbox"
      />
    </div>
  );
};

export default Todo;
