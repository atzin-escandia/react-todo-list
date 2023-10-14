import React from "react";

interface Props {
  filterSelected: () => void;
  onFilterChanged: () => void;
}

const Filters: React.FC<Props> = ({ filterSelected, onFilterChanged }) => {
  return <div></div>;
};

export default Filters;
