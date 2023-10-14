import React, { useState } from "react";

const Todo = () => {
  const [createTodo, setCreateTodo] = useState("");

  return (
    <div className="view">
      <input
        type="text"
        placeholder="Write a todo"
        onChange={(e) => createTodo(e.target.value)}
      />
    </div>
  );
};

export default Todo;
