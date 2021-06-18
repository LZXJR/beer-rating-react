import { Children } from "react";
import { useTranslation } from "react-i18next";

import ratingStart from "../../../entities/ratingItem/ui/img/star.svg";

export const Rating = ({children}) => {
  const {t}=useTranslation()
  return (
    <div className="rating">
      <div className="rating_title">
        <div className="rating_title_item">№</div>
        <div className="rating_title_item">{t("ratingTitle.name")}</div>
        <div className="rating_title_item">{t("ratingTitle.producer")}</div>
        <div className="rating_title_item">{t("ratingTitle.country")}</div>
        <div className="rating_title_item">{t("ratingTitle.grade")}</div>
      </div>

      {children}
    </div>
  );
};

