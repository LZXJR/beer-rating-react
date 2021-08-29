import { FilterButton } from "../../../shared/filterButton/ui/FilterButton";
import {SelectUI} from "../../../shared/select/ui/SelectUI"
import { useOptionsForBeerFilterMain } from "../../../entities/useOptionsForBeerFilterMain";

import "./style.css";

export const BeerFilter = () => {
  return (
    <div className="beer_filter">
      <FilterButton />
      <SelectUI options={useOptionsForBeerFilterMain()} />
    </div>
  );
};
