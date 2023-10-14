import React, { useState } from "react";

interface Props {
  saveTodo: ({ title }: string) => void;
}

const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, setinputValue] = useState("second");
  return (
    <form>
      <input
        className="new-todo"
        value={inputValue}
        onChange={() => {}}
        onKeyDown={() => {}}
        placeholder="Something in mind?"
        autoFocus
      />
    </form>
  );
};

export default CreateTodo;
