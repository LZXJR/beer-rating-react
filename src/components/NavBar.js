import { useTranslation } from "react-i18next";
import beersIcon from "../img/header/beersIcon.svg";

const NavBar = () => {
  const { t,i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <nav>
      <div className="navBar_container navBar_header_bgcolor">
        <div className="nav_header">
          <div className="header_title">
            <h2>BeerRating</h2>
            <img src={beersIcon} alt="beers"></img>
          </div>
        </div>
      </div>

      <div className="navBar_container navBar_main_bgcolor">
        <main className="navBar_main">
          <ul>
            <li>
              <a href="#">{t("nav.navItemOne")}</a>
            </li>
            <li>
              <a href="#">{t("nav.navItemTwo")}</a>
            </li>
            <li>
              <a href="#">{t("nav.navItemThree")}</a>
            </li>
            <li>
              <a href="#">{t("nav.navItemFour")}</a>
            </li>
            <li>
              <a href="#">{t("nav.navItemFive")}</a>
            </li>
          </ul>

          <div className="languages">
            <button onClick={()=>changeLanguage("ua")}>UA</button>
            <button onClick={()=>changeLanguage("en")}>EN</button>
            <button onClick={()=>changeLanguage("ru")}>RU</button>
          </div>
        </main>
      </div>
    </nav>
  );
};

export default NavBar;
