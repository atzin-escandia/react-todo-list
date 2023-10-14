import React from "react";
import Filters from "./Filters";

interface Props {
  activeCount: any;
  todos: any;
  todos: () => void;
}

const Footer: React.FC<Props> = ({ activeCount, todos, todos }) => {
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
