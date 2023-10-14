import React from "react";
import { FilterValue } from "../types";

interface Props {
  filterSelected: (filter: FilterValue) => {};
  onFilterChanged: () => void;
}

const Filters: React.FC<Props> = ({
  filterSelected,
  onFilterChanged,
}: Props) => {
  return <ul className="filters"></ul>;
};

export default Filters;
