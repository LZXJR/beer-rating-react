import beersIcon from "../img/header/beersIcon.svg";

const NavBar = () => {
  return (
    <nav>
      <div className="navBar_container">
        <div className="nav_header">
          <div className="header_title">
            <h2>BeerRating</h2>
            <img src={beersIcon} alt="beers"></img>
          </div>
        </div>
      </div>

      <div className="navBar_container navBar_main_bgcolor">
        <main className="navBar_main">
          <ul>
            <li>
              <a href="#">My Cabinet </a>
            </li>
            <li>
              <a href="#">Random Beer</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Donate</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>

          <div className="languages">
              <button>UA</button>
              <button>EN</button>
              <button>RU</button>


          </div>
        </main>
      </div>
    </nav>
  );
};

export default NavBar;
