import { useTranslation } from "react-i18next";
import "./style.css";


export const RatingUI = ({ children }) => {
  const { t } = useTranslation();
  return (
    <div className="rating">
      <div className="rating_title">
        <div className="rating_title_item">№</div>
        <div className="rating_title_item">{t("RatingTitle.name")}</div>
        <div className="rating_title_item">{t("RatingTitle.color")}</div>
        <div className="rating_title_item">{t("RatingTitle.filtration")}</div>
        <div className="rating_title_item">{t("RatingTitle.fortress")}</div>
        <div className="rating_title_item">{t("RatingTitle.grade")}</div>
      </div>
      {children}
    </div>
  );
};
