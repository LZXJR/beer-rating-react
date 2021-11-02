import { useState } from "react";
import { HeaderUi } from "./ui/HeaderUi";

export const Header = () => {
  const [styleForHeader, setStyleForHeader] = useState({
    header: null,
    searchButton: null,
    searchBar: null
  });

  const openSearchBar = () => {
    const widthOfSearchBar = 214;

    setStyleForHeader({
      header: { flexDirection: "column" },
      searchButton: { display: "none" },
      searchBar: {
        width: widthOfSearchBar + "px",
        padding: "13px 23px 13px 33px",
      },
    });

  };

  return (
    <HeaderUi
      styleForHeader={styleForHeader}
      openSearchBar={openSearchBar}
    />
  );
};
