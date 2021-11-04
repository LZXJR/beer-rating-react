import { useEffect, useState } from "react";
import { NavBarUi } from "./ui/NavBarUi";
import { defaultValue } from "./config/styleForNavBarConfig";
import { generateOpenNavBarStyle } from "./lib/generateOpenNavBarStyle";

export const NavBar = () => {
  const [styleForNavBarOptions, setStyleForNavBarOptions] =
    useState(defaultValue);

  const [styleForLanguagesOptions, setStyleForLanguagesOptions] =
    useState({
      ua: null,
      ru: null,
      en: null,
    });

    useEffect(() => choosingLanguageStyles(), []);

  const switchingNavigation = () => {
    const isNavBarOpen = styleForNavBarOptions.navBarWidth;

    if (isNavBarOpen) {
      setStyleForNavBarOptions(defaultValue);
      return;
    }
    setStyleForNavBarOptions(generateOpenNavBarStyle());
  };

  const choosingLanguageStyles = () => {
    const languageIsChoosed = { border: 0, fontSize: "16px" };
    const buttonId = localStorage.getItem("i18nextLng");

    switch (buttonId) {
      case "ru": {
        setStyleForLanguagesOptions({
          ua: null,
          ru: languageIsChoosed,
          en: null,
        });
        break;
      }
      case "ua": {
        setStyleForLanguagesOptions({
          ua: languageIsChoosed,
          ru: null,
          en: null,
        });
        break;
      }
      case "en": {
        setStyleForLanguagesOptions({
          ua: null,
          ru: null,
          en: languageIsChoosed,
        });
        break;
      }

      default:
        console.error("Not expected: buttonId");
    }
  };

  return (
    <NavBarUi
      styleForNavBarOptions={styleForNavBarOptions}
      styleForLanguagesOptions={styleForLanguagesOptions}
      switchingNavigation={switchingNavigation}
      choosingLanguageStyles={choosingLanguageStyles}
    />
  );
};
