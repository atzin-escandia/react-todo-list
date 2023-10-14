import React, { useState } from "react";
import { Props } from "../../.history/src/types.d_20231012125832";

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
