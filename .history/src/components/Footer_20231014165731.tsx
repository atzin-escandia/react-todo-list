import React from "react";
import Filters from "./Filters";

const Footer: React.FC<Props> = ({ activeCount, todos, onClearCompleted }) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todos.length}</strong> tareas pendientes
      </span>
      <Filters filterSelected={} onFilterChanged={() => {}} />
    </footer>
  );
};

export default Footer;
