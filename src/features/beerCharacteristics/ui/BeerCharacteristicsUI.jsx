import { useTranslation } from "react-i18next";
import { BeerCharacteristicsItem } from "../../../shared/beerCharacteristicsItem";

import costIcon from "./img/money-bag.svg";
import tasteIcon from "./img/wine-tasting.svg";
import lookIcon from "./img/look.svg";
import SmellIcon from "./img/smell.svg";
import alcoholIcon from "./img/alcohol-content.svg";

import PropTypes from "prop-types";

import "./style.css";
export const BeerCharacteristicsUI = ({
  beerPageData,
  sumUpBeer,
  children,
}) => {
  const { t } = useTranslation();

  const { cost_grade, taste_grade, look_grade, smell_grade, alcohol_grade } =
    beerPageData;

  return (
    <div className="briefly_about_beer_item white_bg_and_border_radius">
      <BeerCharacteristicsItem
        characteristicTitle={t("BeerCharacteristicsItem.titleCost")}
        characteristicTag="cost"
        characteristicIcon={costIcon}
        characteristicGrade={cost_grade}
      />
      <BeerCharacteristicsItem
        characteristicTitle={t("BeerCharacteristicsItem.titleTaste")}
        characteristicTag="taste"
        characteristicIcon={tasteIcon}
        characteristicGrade={taste_grade}
      />
      <BeerCharacteristicsItem
        characteristicTitle={t("BeerCharacteristicsItem.titleLook")}
        characteristicTag="look"
        characteristicIcon={lookIcon}
        characteristicGrade={look_grade}
      />
      <BeerCharacteristicsItem
        characteristicTitle={t("BeerCharacteristicsItem.titleSmell")}
        characteristicTag="smell"
        characteristicIcon={SmellIcon}
        characteristicGrade={smell_grade}
      />
      <BeerCharacteristicsItem
        characteristicTitle={t("BeerCharacteristicsItem.titleAlcoholContent")}
        characteristicTag="alcohol"
        characteristicIcon={alcoholIcon}
        characteristicGrade={alcohol_grade}
      />
      <button className="sumUp_button" onClick={() => sumUpBeer()}>
        {t("SumUp.button")}
      </button>

      {children}
    </div>
  );
};

BeerCharacteristicsUI.propTypes = {
  sumUpBeer: PropTypes.func.isRequired,
};
