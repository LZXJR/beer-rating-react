import "./style.css";
import { Layout } from "../../../shared/layout/ui/Layout";

import { Button3dUI } from "../../../features/3dButton/ui/Button3dUI";
import { BrieflyAboutBeerUI } from "../../../features/brieflyAboutBeer/ui/BrieflyAboutBeerUI";
import { BeerPhotoUI } from "../../../features/beerPhoto/ui/BeerPhotoUI";
import { BeerCharacteristics } from "../../../features/beerCharacteristics/BeerCharacteristics";
import { BeerDescriptionUI } from "../../../features/beerDescription/ui/BeerDescriptionUI";
import { BeerCommentsUI } from "../../../features/beerComments/ui/BeerCommentsUI";

export const BeerPageUi = ({ beerPageData }) => {
  const { id, name } = beerPageData;
  return (
    <>
      <div className="header_and_main">
        <main>
          <Layout>
            <div className="beerPage">
              <div className="beerPage_title_AND_3d_button">
                <h2 className="beerPage_title">{name}</h2>
                <Button3dUI />
              </div>

              <BrieflyAboutBeerUI beerPageData={beerPageData}>
                <BeerPhotoUI id={id} />
                <BeerCharacteristics beerPageData={beerPageData}/>
              </BrieflyAboutBeerUI>
              <BeerDescriptionUI beerPageData={beerPageData} />
              <BeerCommentsUI />
            </div>
          </Layout>
        </main>
      </div>
    </>
  );
};
