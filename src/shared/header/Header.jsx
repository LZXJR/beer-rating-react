import { useState } from "react";
import { HeaderUi } from "./ui/HeaderUi";

export const Header = () => {
  const [styleForHeader, setStyleForHeader] = useState(null);
  const [styleForSearchButton, setStyleForSearchButton] = useState(null);
  const [styleForSearchBar, setStyleForSearchBar] = useState(null);

  const openSearchBar = () => {
    const widthOfSearchBar = 214;

    setStyleForHeader({ flexDirection: "column" });
    setStyleForSearchButton({ display: "none" });
    setStyleForSearchBar({ width: widthOfSearchBar + 'px', padding: "13px 23px 13px 33px" });
  };

  return (
    <HeaderUi
      styleForHeader={styleForHeader}
      styleForSearchButton={styleForSearchButton}
      styleForSearchBar={styleForSearchBar}
      openSearchBar={openSearchBar}
    />
  );
};
