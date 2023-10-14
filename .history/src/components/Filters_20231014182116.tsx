import React from "react";
import { FilterValue } from "../types";
import { FILTER_BUTTONS } from "../consts";

interface Props {
  filterSelected: (filter: FilterValue) => {};
  onFilterChanged: () => void;
}

const Filters: React.FC<Props> = ({
  filterSelected,
  onFilterChanged,
}: Props) => {
  return (
    <ul className="filters">
      {Object.entries(FILTER_BUTTONS).map(([kwy, { href, literal }]) => {
        const isSelected = key === filterSelected;
        const className = isSelected ? "selected" : "";

        return <li key={} className></li>;
      })}
    </ul>
  );
};

export default Filters;
