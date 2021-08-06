import { useState } from "react";
import { NavBarUi } from "./ui/NavBarUi";
import { isItMobile } from "../isItMobile";
import { changeOptions } from "../../shared/changeOptions";

export const NavBar = () => {
  const [styleForNavBarOptions, setStyleForNavBarOptions] = useState({
    blackBackground: null,
    navBarWidth: null,
    arrow: null,
    ua: null,
    en: { border: 0, fontSize: "16px" },
    ru: null,
  });

  const switchingNavigation = () => {
    const windowWidth = window.innerWidth;
    const navigationWidth = isItMobile(windowWidth) ? windowWidth : 270;
    const arrowWidth = isItMobile(windowWidth) ? windowWidth - 30 : 270;
    const isNavBarOpen = styleForNavBarOptions.navBarWidth;

    if (isNavBarOpen) {
      changeOptions(setStyleForNavBarOptions, "navBarWidth", null);
      changeOptions(setStyleForNavBarOptions, "arrow", null);
      changeOptions(setStyleForNavBarOptions, "blackBackground", null);
    } else {
      changeOptions(setStyleForNavBarOptions, "navBarWidth", {
        width: navigationWidth + "px",
      });
      changeOptions(setStyleForNavBarOptions, "arrow", {
        left: arrowWidth + "px",
        transform: "rotate(180deg)",
      });
      changeOptions(setStyleForNavBarOptions, "blackBackground", {
        zIndex: 2,
        opacity: 1,
      });
    }
  };

  const choosingLanguageStyles = (event) => {
    const languageIsChoosed = { border: 0, fontSize: "16px" };
    const buttonId = event.target.outerText.toLowerCase();

    switch (buttonId) {
      case "ua": {
        changeOptions(setStyleForNavBarOptions, "ua", languageIsChoosed);
        changeOptions(setStyleForNavBarOptions, "en", null);
        changeOptions(setStyleForNavBarOptions, "ru", null);
        break;
      }
      case "en": {
        changeOptions(setStyleForNavBarOptions, "ua", null);
        changeOptions(setStyleForNavBarOptions, "en", languageIsChoosed);
        changeOptions(setStyleForNavBarOptions, "ru", null);
        break;
      }
      case "ru": {
        changeOptions(setStyleForNavBarOptions, "ua", null);
        changeOptions(setStyleForNavBarOptions, "en", null);
        changeOptions(setStyleForNavBarOptions, "ru", languageIsChoosed);
        break;
      }
      default:
        console.error("Not expected: buttonId")
    }
  };

  return (
    <NavBarUi
      styleForNavBarOptions={styleForNavBarOptions}
      switchingNavigation={switchingNavigation}
      choosingLanguageStyles={choosingLanguageStyles}
    />
  );
};
