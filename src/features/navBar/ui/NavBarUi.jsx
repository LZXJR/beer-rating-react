import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import "./style.css";

import beersIcon from "./img/beersIcon.svg";
import arrowIcon from "./img/arrow.svg";

export const NavBarUi = ({
  styleForNavBarOptions,
  styleForLanguagesOptions,
  switchingNavigation,
  choosingLanguageStyles,
}) => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const { ua, en, ru } = styleForLanguagesOptions;
  const { blackBackground, arrow, navBarWidth } = styleForNavBarOptions;

  return (
    <>
      <div className="black_bg" style={blackBackground}></div>

      <button
        className="open_navBar"
        style={arrow}
        onClick={() => switchingNavigation()}
      >
        <img src={arrowIcon} alt="arrow" />
      </button>

      <nav style={navBarWidth}>
        <header className="navBar_container navBar_header_bgcolor">
          <div className="nav_header">
            <a href="/" className="header_title">
              <h2>BeerRating</h2>
              <img src={beersIcon} alt="beers"></img>
            </a>
          </div>
        </header>

        <div className="navBar_container navBar_container_main">
          <main className="navBar_main ">
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
            </ul>

            <div className="languages">
              <button
                style={ua}
                onClick={() => {
                  changeLanguage("ua");
                  choosingLanguageStyles();
                }}
              >
                UA
              </button>
              <button
                style={en}
                onClick={() => {
                  changeLanguage("en");
                  choosingLanguageStyles();
                }}
              >
                EN
              </button>
              <button
                style={ru}
                onClick={() => {
                  changeLanguage("ru");
                  choosingLanguageStyles();
                }}
              >
                RU
              </button>
            </div>

            <div className="logIn_SignUp logIn_SignUp_NavBar">
              <a href="#">Log in</a>
              <span> | </span>
              <a href="#">Sign up</a>
            </div>
          </main>
        </div>
      </nav>
    </>
  );
};

NavBarUi.propTypes = {
  styleForNavBarOptions: PropTypes.object.isRequired,
  styleForLanguagesOptions: PropTypes.object,
  choosingLanguageStyles: PropTypes.func.isRequired,
  switchingNavigation: PropTypes.func.isRequired,
};
