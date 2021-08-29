import openFilter from "./img/openFilter.svg";
import closeFilter from "./img/closeFilter.svg";
import { useState } from "react";
import "./style.css";

export const FilterButton = ({ onClickFunction }) => {
  const [Filter, setFilter] = useState(false);

  return (
    <button className="filter_button"
      onClick={() => {
        onClickFunction();
        setFilter(!Filter);
      }}
    >
      <img className="filter_photo" src={Filter ? closeFilter : openFilter} alt="filter"/>
    </button>
  );
};
