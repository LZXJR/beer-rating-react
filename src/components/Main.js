import { useTranslation } from "react-i18next";
import Rating from '../components/Rating'

const Main = () => {
  const {t}=useTranslation()
  return (
    <div className="container">
      <main>
          <div className="rating_title">
              <div className="rating_title_item">№</div>
              <div className="rating_title_item">{t("ratingTitle.name")}</div>
              <div className="rating_title_item">{t("ratingTitle.producer")}</div>
              <div className="rating_title_item">{t("ratingTitle.country")}</div>
              <div className="rating_title_item">{t("ratingTitle.grade")}</div>
          </div>
          <Rating/>
      </main>
    </div>
  );
};

export default Main