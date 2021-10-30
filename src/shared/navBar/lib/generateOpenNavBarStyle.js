import { isItMobile } from "../../isItMobile";

export const generateOpenNavBarStyle = () => {
  const windowWidth = window.innerWidth;
  const navigationWidth = isItMobile(windowWidth) ? windowWidth : 270;
  const arrowWidth = isItMobile(windowWidth) ? windowWidth - 30 : 270;

  return {
    blackBackground: { zIndex: 2, opacity: 1 },
    navBarWidth: { width: navigationWidth + "px" },
    arrow: { left: arrowWidth + "px", transform: "rotate(180deg)" },
  };
};
