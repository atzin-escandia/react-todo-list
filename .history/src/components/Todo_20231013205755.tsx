import React, { useState } from "react";

const Todo = () => {
  const [value, setValue] = useState(null);

  const setCreateTodo = ({ input }) => {};

  return (
    <div className="view">
      <input
        type="text"
        placeholder="Write a todo"
        onChange={(e) => setCreateTodo(e.target.value)}
      />
    </div>
  );
};

export default Todo;
