import { useTranslation } from "react-i18next";
import "./style.css";

import PropTypes from 'prop-types';

export const BeerDescriptionUI = ({ beerPageData }) => {
  const { t } = useTranslation();

  const {
    country,
    manufacturer,
    cost,
    sort,
    color,
    filtration,
    fortress,
    density,
    composition,
    shelf_life,
    storage_conditions,
    site,
  } = beerPageData;
  return (
    <div className="beer_description white_bg_and_border_radius">
      <h3 className="beer_title">{t("BeerDescription.title")}</h3>
      <hr className="beer_hr" />

      <div className="beer_description_table">
        <h4>{t("BeerDescription.BeerDescriptionTable.titleCountry")}</h4>
        <p>{country}</p>

        <h4>{t("BeerDescription.BeerDescriptionTable.titleManufacturer")}</h4>
        <p>{manufacturer}</p>

        <h4>{t("BeerDescription.BeerDescriptionTable.titleCost")}</h4>
        <p>{cost}$</p>

        <h4>{t("BeerDescription.BeerDescriptionTable.titleSort")}</h4>
        <p>{sort}</p>

        <h4>{t("BeerDescription.BeerDescriptionTable.titleColor")}</h4>
        <p>{color}</p>

        <h4>{t("BeerDescription.BeerDescriptionTable.titleFiltration")}</h4>
        <p>{filtration}</p>

        <h4>{t("BeerDescription.BeerDescriptionTable.titleAlcoholContent")}</h4>
        <p>{fortress}%</p>

        <h4>{t("BeerDescription.BeerDescriptionTable.titleDensity")}</h4>
        <p>{density}%</p>

        <h4>{t("BeerDescription.BeerDescriptionTable.titleComposition")}</h4>
        <p>{composition}</p>

        <h4>{t("BeerDescription.BeerDescriptionTable.titleShelfLife")}</h4>
        <p>{shelf_life} месяцев</p>

        <h4>
          {t("BeerDescription.BeerDescriptionTable.titleStorageСonditions")}
        </h4>
        <p>{storage_conditions}</p>

        <h4>{t("BeerDescription.BeerDescriptionTable.titleOfficialSite")}</h4>
        <a target="_blank" rel="noreferrer" href={site}>
          {site}
        </a>
      </div>
    </div>
  );
};


BeerDescriptionUI.propTypes = {
  beerPageData:PropTypes.object.isRequired
}