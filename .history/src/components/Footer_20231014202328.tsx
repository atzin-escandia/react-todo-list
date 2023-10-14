import React from "react";
import Filters from "./Filters";
import { FilterValue } from "../types";

interface Props {
  activeCount: any;
  completedCount: number;
  filterSelected: FilterValue;
  onClearCompleted: () => void;
  handleFilterChange: (filter: FilterValue) => void;
}

const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  onClearCompleted,
  handleFilterChange,
}: Props) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> pending tasks
      </span>
      <Filters
        filterSelected={filterSelected}
        onFilterChanged={() => handleFilterChange}
      />

      {completedCount > 0 && (
        <button className="clear-completed" onClick={onClearCompleted}>
          Remove completed
        </button>
      )}
    </footer>
  );
};

export default Footer;
