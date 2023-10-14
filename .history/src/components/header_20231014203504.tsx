import React from "react";

interface Props {}

const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className="header">
      <h1>Todo list</h1>
    </header>
  );
};

export default Header;
