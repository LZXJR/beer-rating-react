import { useState } from "react";
import { NavBarUi } from "./ui/NavBarUi";
import { defaultValue } from "./config/styleForNavBarConfig";
import { generateOpenNavBarStyle } from "./lib/generateOpenNavBarStyle";

export const NavBar = () => {
  const [styleForNavBarOptions, setStyleForNavBarOptions] =
    useState(defaultValue);

  const [styleForLanguagesOptions, setStyleForLanguagesOptions] = useState({
    ru: { border: 0, fontSize: "16px" },
  });

  const switchingNavigation = () => {
    const isNavBarOpen = styleForNavBarOptions.navBarWidth;

    if (isNavBarOpen) {
      setStyleForNavBarOptions(defaultValue);
      return;
    }
    setStyleForNavBarOptions(generateOpenNavBarStyle());
  };

  const choosingLanguageStyles = (event) => {
    const languageIsChoosed = { border: 0, fontSize: "16px" };
    const buttonId = event.target.outerText.toLowerCase();

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
