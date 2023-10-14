import React from "react";
import { FilterValue } from "../types";
import { FILTER_BUTTONS } from "../consts";

interface Props {
  onFilterChanged: (filter: FilterValue) => {};
  filterSelected: FilterValue;
}

const Filters: React.FC<Props> = ({
  filterSelected,
  onFilterChanged,
}: Props) => {
  return (
    <ul className="filters">
      {Object.entries(FILTER_BUTTONS).map(([key, { href, literal }]) => {
        const isSelected = key === filterSelected;
        const className = isSelected ? "selected" : "";

        return (
          <li key={key} className={className}>
            <a
              href="href"
              className="className"
              onClick={(event) => {
                event?.preventDefault();
                onFilterChanged(key as FilterValue);
              }}
            >
              hli
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Filters;
