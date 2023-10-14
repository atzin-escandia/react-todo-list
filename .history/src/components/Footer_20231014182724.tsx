import React from "react";
import Filters from "./Filters";

interface Props {
  activeCount: any;
  completedCount: number;
  onClearCompleted: () => void;
}

const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  onClearCompleted,
}: Props) => {
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
