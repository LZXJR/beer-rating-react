import beersIcon from "../img/header/beersIcon.svg";
import searchIcon from "../img/header/searchIcon.svg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="header_title">
            <h1>BeerRating</h1>
            <img src={beersIcon} alt="beers"></img>
          </div>
          <div className="header_searchbar_And_logIn_SignUp">
            <input
              type="search"
              className="header_searchbar_item"
              placeholder="Search..."
            ></input>
            <img src={searchIcon} alt="search" className="search_icon"></img>

            <div className="logIn_SignUp">
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

export default Header;
