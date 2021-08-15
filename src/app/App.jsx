import "./style.css";

import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {MainPage} from "../pages/main/ui/MainPage"
const BeerPageUi = lazy(() => import("../pages/beerPage/ui/BeerPageUi"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/beerPage">
            <BeerPageUi />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
