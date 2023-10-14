import React, { useState } from "react";

interface Props {
  saveTodo: ({ title }: string) => void;
}

const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, setinputValue] = useState("second");
  return (
    <input
      className="new-todo"
      value={inputValue}
      onChange={() => {}}
      onkeyDown={() => {}}
      placeholder="Something in mind?"
      autoFocus
    />
  );
};

export default CreateTodo;
