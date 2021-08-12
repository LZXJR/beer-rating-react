import { useTranslation } from "react-i18next";
import "./style.css";


export const RatingUI = ({ children }) => {
  const { t } = useTranslation();
  return (
    <div className="rating">
      <div className="rating_title">
        <div className="rating_title_item">№</div>
        <div className="rating_title_item">{t("ratingTitle.name")}</div>
        <div className="rating_title_item">{t("ratingTitle.color")}</div>
        <div className="rating_title_item">{t("ratingTitle.filtration")}</div>
        <div className="rating_title_item">{t("ratingTitle.fortress")}</div>
        <div className="rating_title_item">{t("ratingTitle.grade")}</div>
      </div>
      {children}
    </div>
  );
};
