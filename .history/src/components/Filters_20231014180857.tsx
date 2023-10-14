import React from "react";
import { TODO_FILTERS } from "../consts";
import { FilterValue } from "../types";

interface Props {
  filterSelected: FilterValue;
  onFilterChanged: () => void;
}

const Filters: React.FC<Props> = ({
  filterSelected,
  onFilterChanged,
}: Props) => {
  return <div></div>;
};

export default Filters;
