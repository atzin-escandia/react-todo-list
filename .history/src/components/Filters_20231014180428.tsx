import React from "react";
import { TODO_FILTERS } from "../consts";

interface Props {
  filterSelected: (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS];
  onFilterChanged: () => void;
}

const Filters: React.FC<Props> = ({
  filterSelected,
  onFilterChanged,
}: Props) => {
  return <div></div>;
};

export default Filters;
