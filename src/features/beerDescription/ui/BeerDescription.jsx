import { useTranslation } from "react-i18next";
import "./style.css";


export const BeerDescriptionUI = () => {
  const { t } = useTranslation();
  return (
    <div className={"beer_description white_bg_and_border_radius"}>
      <h3 className="beer_title">{t("BeerDescription.title")}</h3>
      <hr className="beer_hr" />
      <div className="beer_description_table">
        <h4>{t("BeerDescription.BeerDescriptionTable.titleCountry")}</h4>
        <p>Belgium</p>

        <h4>{t("BeerDescription.BeerDescriptionTable.titleManufacturer")}</h4>
        <p>AB InBev</p>

        <h4>{t("BeerDescription.BeerDescriptionTable.titleCost")}</h4>
        <p>0,91$</p>

        <h4>{t("BeerDescription.BeerDescriptionTable.titleSort")}</h4>
        <p>Camp</p>

        <h4>{t("BeerDescription.BeerDescriptionTable.titleColor")}</h4>
        <p>Light</p>

        <h4>{t("BeerDescription.BeerDescriptionTable.titleFiltration")}</h4>
        <p>Yes</p>

        <h4>{t("BeerDescription.BeerDescriptionTable.titleAlcoholContent")}</h4>
        <p>HZ</p>

        <h4>{t("BeerDescription.BeerDescriptionTable.titleDensity")}</h4>
        <p>12%</p>

        <h4>{t("BeerDescription.BeerDescriptionTable.titleComposition")}</h4>
        <p>
          Malting malting barley, rice or corn, groats or maltose molasses,
          hops.
        </p>

        <h4>{t("BeerDescription.BeerDescriptionTable.titleShelfLife")}</h4>
        <p>9 months</p>

        <h4>{t("BeerDescription.BeerDescriptionTable.titleStorageСonditions")}</h4>
        <p>In a dark place at a temperature of 0 to 30</p>

        <h4>{t("BeerDescription.BeerDescriptionTable.titleOfficialSite")}</h4>
        <a target="_blank" rel="noreferrer" href="http://www.stellaartois.com">
          http://www.stellaartois.com
        </a>
      </div>
    </div>
  );
};
