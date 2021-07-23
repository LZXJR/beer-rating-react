import ReactImageMagnify from "react-image-magnify";
import { useTranslation } from "react-i18next";
import {BeerCharacteristicsItem} from "../../../shared/BeerCharacteristicsItem/ui/BeerCharacteristicsItemUI.jsx"
import "./style.css";

import beerPhoto from "./img/stella-beer.png";

export const BrieflyAboutBeerUI = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="briefly_about_beer">
        <div className="briefly_about_beer_item white_bg_and_border_radius">
          <ReactImageMagnify
            className="briefly_about_beer_photo"
            enlargedImageContainerDimensions={{ width: "208%", height: "100%" }}
            isHintEnabled={true}
            shouldHideHintAfterFirstActivation={false}
            {...{
              smallImage: {
                alt: "Stella beer",
                isFluidWidth: false,
                src: beerPhoto,
                width: 131,
                height: 528,
              },
              largeImage: {
                src: beerPhoto,
                width: 272,
                height: 1057,
              },
            }}
          />
        </div>
        <div className="briefly_about_beer_item white_bg_and_border_radius">
        <BeerCharacteristicsItem characteristicTitle={t("BeerCharacteristicsItem.titleCost")} characteristicTag="cost" />
        <BeerCharacteristicsItem characteristicTitle={t("BeerCharacteristicsItem.titleTaste")} characteristicTag="taste" />
        <BeerCharacteristicsItem characteristicTitle={t("BeerCharacteristicsItem.titleLook")} characteristicTag="look" />
        <BeerCharacteristicsItem characteristicTitle={t("BeerCharacteristicsItem.titleSmell")} characteristicTag="smell"/>
        <BeerCharacteristicsItem characteristicTitle={t("BeerCharacteristicsItem.titleAlcoholContent")} characteristicTag="alcohol content" />

        </div>

      </div>
    </>
  );
};
