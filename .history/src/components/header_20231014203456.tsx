import React from "react";

interface Props {}

const header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className="header">
      <h1>Todo list</h1>
    </header>
  );
};

export default header;
