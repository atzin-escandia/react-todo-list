import React, { useState } from "react";
import { Props } from "../../.history/src/types.d_20231012125832";

interface Props {
  input: string;
}

const Todo = () => {
  const [value, setValue] = useState(null);

  const setCreateTodo = ({ input }: Props) => {};

  return (
    <div className="view">
      <input
        placeholder="Write a todo"
        onChange={(e) => setCreateTodo(e.target.value)}
        type="checkbox"
      />
    </div>
  );
};

export default Todo;
