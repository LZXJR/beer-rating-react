import "./style.css";
import { Layout } from "../../../shared/layout/ui/Layout";

import { Button3dUI } from "../../../features/3dButton/";
import { BrieflyAboutBeerUI } from "../../../features/brieflyAboutBeer/";
import { BeerPhotoUI } from "../../../features/beerPhoto/";
import { BeerCharacteristics } from "../../../features/beerCharacteristics/";
import { BeerDescriptionUI } from "../../../features/beerDescription/";
import { BeerCommentsUI } from "../../../features/beerComments/";

import PropTypes from "prop-types";

export const BeerPageUi = ({ beerPageData }) => {
  const { id, name } = beerPageData;



  return (
    <>
      <main>
        <Layout>
          <div className="beerPage">
            <div className="beerPage_title_AND_3d_button">
              <h2 className="beerPage_title">{name}</h2>
              <Button3dUI />
            </div>

            <BrieflyAboutBeerUI beerPageData={beerPageData}>
              <BeerPhotoUI id={id} />
              <BeerCharacteristics beerPageData={beerPageData} />
            </BrieflyAboutBeerUI>
            <BeerDescriptionUI beerPageData={beerPageData} />
            <BeerCommentsUI />
          </div>
        </Layout>
      </main>
    </>
  );
};

BeerPageUi.propTypes = {
  beerPageData: PropTypes.object.isRequired,
};
