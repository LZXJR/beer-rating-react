import { useTranslation } from "react-i18next";
import "./style.css";

import {RatingItem} from "../../../shared/ratingItem/ui/RatingItem"

export const Rating = ({ children }) => {
  const { t } = useTranslation();
  return (
    <div className="rating">
      <div className="rating_title">
        <div className="rating_title_item">№</div>
        <div className="rating_title_item">{t("ratingTitle.name")}</div>
        <div className="rating_title_item">{t("ratingTitle.producer")}</div>
        <div className="rating_title_item">{t("ratingTitle.country")}</div>
        <div className="rating_title_item">{t("ratingTitle.grade")}</div>
      </div>
      <RatingItem
        place="1"
        name="Stella Artois"
        producer="Anheuser-Busch InBev"
        country="Belgium"
      />
      <RatingItem
        place="1"
        name="Stella Artois"
        producer="Anheuser-Busch InBev"
        country="Бельгія"
      />
      <RatingItem
        place="1"
        name="Stella Artois"
        producer="Anheuser-Busch InBev"
        country="Бельгія"
      />
      <RatingItem
        place="1"
        name="Stella Artois"
        producer="Anheuser-Busch InBev"
        country="Бельгія"
      />
      <RatingItem
        place="1"
        name="Stella Artois"
        producer="Anheuser-Busch InBev"
        country="Бельгія"
      />
      <RatingItem
        place="1"
        name="Stella Artois"
        producer="Anheuser-Busch InBev"
        country="Бельгія"
      />
      <RatingItem
        place="1"
        name="Stella Artois"
        producer="Anheuser-Busch InBev"
        country="Бельгія"
      />
      <RatingItem
        place="1"
        name="Stella Artois"
        producer="Anheuser-Busch InBev"
        country="Бельгія"
      />
      <RatingItem
        place="1"
        name="Stella Artois"
        producer="Anheuser-Busch InBev"
        country="Бельгія"
      />
      <RatingItem
        place="1"
        name="Stella Artois"
        producer="Anheuser-Busch InBev"
        country="Бельгія"
      />
      <RatingItem
        place="1"
        name="Stella Artois"
        producer="Anheuser-Busch InBev"
        country="Бельгія"
      />
      {children}
    </div>
  );
};
