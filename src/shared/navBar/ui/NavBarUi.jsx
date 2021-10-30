import { useTranslation } from "react-i18next";
import PropTypes from "prop-types"
import "./style.css";

import beersIcon from "./img/beersIcon.svg";
import arrow from "./img/arrow.svg";

export const NavBarUi = ({
  styleForNavBarOptions,
  styleForLanguagesOptions,
  switchingNavigation,
  choosingLanguageStyles
}) => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <div className="black_bg" style={styleForNavBarOptions.blackBackground}></div>

      <button
        className="open_navBar"
        style={styleForNavBarOptions.arrow}
        onClick={() => switchingNavigation()}
      >
        <img src={arrow} alt="arrow" />
      </button>

      <nav style={styleForNavBarOptions.navBarWidth}>
        
        <header className="navBar_container navBar_header_bgcolor">
          <div className="nav_header">
            <div className="header_title">
              <h2>BeerRating</h2>
              <img src={beersIcon} alt="beers"></img>
            </div>
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
              <button  style={styleForLanguagesOptions.ua} onClick={(event) =>{changeLanguage("ua");choosingLanguageStyles(event)}}>UA</button>
              <button  style={styleForLanguagesOptions.en} onClick={(event) =>{changeLanguage("en");choosingLanguageStyles(event)}}>EN</button>
              <button  style={styleForLanguagesOptions.ru} onClick={(event) =>{changeLanguage("ru");choosingLanguageStyles(event)}}>RU</button>
             
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

// NavBarUi.propTypes={
//   styleForNavBar:PropTypes.object.isRequired,
//   styleForArrow:PropTypes.object.isRequired,
//   styleForBlackBg:PropTypes.object.isRequired,
//   switchingNavigation:PropTypes.func.isRequired,

// }