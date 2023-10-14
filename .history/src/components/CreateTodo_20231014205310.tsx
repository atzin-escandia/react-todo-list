import React, { useState } from "react";

interface Props {
  saveTodo: ({ title }: string) => void;
}
const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, setInputValue] = useState("second");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    saveTodo({ title: inputValue });
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        placeholder="Something in mind?"
        autoFocus
      />
    </form>
  );
};

export default CreateTodo;
