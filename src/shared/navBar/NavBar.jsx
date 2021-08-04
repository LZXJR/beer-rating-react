import { useState } from "react";
import { NavBarUi } from "./ui/NavBarUi";
import { isItMobile } from "../isItMobile";

export const NavBar = () => {
  const [styleForBlackBg, setStyleForBlackBg] = useState({ zIndex: -1, opacity: 0 });
  const [styleForNavBar, setStyleForNavBar] = useState(null);
  const [styleForArrow, setStyleForArrow] = useState(null);
  
  const switchingNavigation = () => {
    const windowWidth = window.innerWidth;
    const navigationWidth = isItMobile(windowWidth) ? windowWidth : 270;
    const arrowWidth = isItMobile(windowWidth) ? windowWidth - 30 : 270;

    if (!styleForArrow) {
      setStyleForNavBar({ width: navigationWidth + "px" });
      setStyleForArrow({
        left: arrowWidth + "px",
        transform: "rotate(180deg)",
      });
      setStyleForBlackBg({ zIndex: 2, opacity: 1 });
      return;
    } else {
      setStyleForNavBar(null);
      setStyleForArrow(null);
      setStyleForBlackBg({ opacity: 0 }); 
    }
  };

  return (
    <NavBarUi
      styleForNavBar={styleForNavBar}
      styleForArrow={styleForArrow}
      styleForBlackBg={styleForBlackBg}
      switchingNavigation={switchingNavigation}
    />
  );
};
