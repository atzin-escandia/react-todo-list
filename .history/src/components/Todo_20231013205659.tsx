import React, { useState } from "react";

const Todo = () => {
  const [createTodo, setCreateTodo] = useState(null);

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
