import React from "react";
import CreateTodo from "./CreateTodo";

interface Props {
  onAddTodo: ({ title }: string) => void;
}

const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className="header">
      <h1>Todo list</h1>

      <CreateTodo saveTodo={onAddTodo} />
    </header>
  );
};

export default Header;
