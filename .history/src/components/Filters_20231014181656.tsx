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
  return <ul className="filters">
    {
      FILTER_BUTTONS.map({value, label}=>{
        
      })
    }
  </ul>;
};

export default Filters;
