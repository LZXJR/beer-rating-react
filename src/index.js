import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./app/App.jsx";
import "./entities/i18n/";
import { beerCharacteristicsStore } from "./features/beerCharacteristics/model/store.js";

ReactDOM.render(
  <Provider store={beerCharacteristicsStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
