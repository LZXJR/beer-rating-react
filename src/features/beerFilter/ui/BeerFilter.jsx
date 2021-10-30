import { FilterButton } from "../../../shared/filterButton/ui/FilterButton";
import {SelectUI} from "../../../shared/select/ui/SelectUI"
import { useOptionsForBeerFilterMain } from "../lib/useOptionsForBeerFilterMain";

import "./style.css";

export const BeerFilter = ({chooseFilter}) => {
  return (
    <div className="beer_filter">
      <FilterButton />
      <SelectUI options={useOptionsForBeerFilterMain()} setChoose={chooseFilter}/>
    </div>
  );
};
