import "./style.css";

import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { MainPage } from "../pages/main/";
import { NavBar } from "../features/navBar/";
import { Header } from "../features/header/";

const BeerPage = lazy(() => import("../pages/beerPage/"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <Header />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/beerPage:id">
            <BeerPage />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
