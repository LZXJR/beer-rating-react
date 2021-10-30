import { createStore } from "redux";
import { reducer } from "./reducer";

export const beerCharacteristicsStore = createStore(reducer);
