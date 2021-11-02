import { FilterButtonUI } from "../../../shared/filterButton/";
import {SelectUI} from "../../../shared/select/"
import { useOptionsForBeerFilterMain } from "../lib/useOptionsForBeerFilterMain";
import PropTypes from 'prop-types';

import "./style.css";

export const BeerFilterUI = ({chooseFilter}) => {
  return (
    <div className="beer_filter">
      <FilterButtonUI />
      <SelectUI options={useOptionsForBeerFilterMain()} setChoose={chooseFilter}/>
    </div>
  );
};

BeerFilterUI.propTypes = {
  chooseFilter:PropTypes.string.isRequired
}