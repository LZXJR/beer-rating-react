import PropTypes from "prop-types"
import "./style.css";

import beersIcon from "./img/beersIcon.svg";
import searchIcon from "./img/searchIcon.svg";
import searchIconWhite from "./img/searchIconWhite.svg";

export const HeaderUi = ({styleForHeader,openSearchBar}) => {
 
  const {header,searchButton,searchBar} = styleForHeader

  return (
    <header >
      <div className="container">
        <div className="header" style={header}>
          <a href="/" className="header_title" id="header_title">
            <h1>BeerRating</h1>
            <img src={beersIcon} alt="beers"></img>
          </a>

          <button className="search_button" style={searchButton} onClick={()=>openSearchBar()}>
            <img src={searchIconWhite} alt="search icon" />
          </button>
          <div className="header_searchbar_And_logIn_SignUp">
            <input
              type="search"
              className="header_searchbar_item"
              placeholder="Search..."
              style={searchBar}
            />
            <img src={searchIcon} alt="search" className="search_icon"/>

            <div className="logIn_SignUp" id="logIn_SignUp">
              <a href="#">Log in</a>
              <span> | </span>
              <a href="#">Sign up</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

HeaderUi.propTypes={
  styleForHeader:PropTypes.object.isRequired,
  openSearchBar:PropTypes.func.isRequired,
}