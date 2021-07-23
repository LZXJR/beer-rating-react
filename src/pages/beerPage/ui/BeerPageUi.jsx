import { Suspense} from "react";
import "./style.css";

import { NavBar } from "../../../shared/navBar/NavBar.jsx";
import { Header } from "../../../shared/header/Header.jsx";
import { Layout } from "../../../shared/layout/ui/Layout";

import { Button3dUI } from "../../../features/3dButton/ui/Button3dUI";
import { BrieflyAboutBeerUI } from "../../../features/brieflyAboutBeer/ui/BrieflyAboutBeerUI";
import { BeerDescriptionUI } from "../../../features/beerDescription/ui/BeerDescription";
import { BeerCommentsUI } from "../../../features/beerComments/ui/BeerCommentsUI";

export const BeerPageUi = () => {

  return (
    <>
      <Suspense fallback="Loading...">
        <NavBar />
        <div className="header_and_main">
          <Header />
          <main>
          <Layout>
            <div className="beerPage">
              <div className="beerPage_title_AND_3d_button">
                <h2 className="beerPage_title">Stella Artois</h2>
                <Button3dUI/>
              </div>

              <BrieflyAboutBeerUI />
              <BeerDescriptionUI />
              <BeerCommentsUI />
            </div>
            </Layout>
          </main>
        </div>
      </Suspense>
    </>
  );
};
