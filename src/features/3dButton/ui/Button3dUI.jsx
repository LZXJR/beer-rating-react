import _360Deg from "./img/360-degrees.svg";
import "./style.css";

import PropTypes from "prop-types";

export const Button3dUI = ({ onClick }) => {
  return (
    <button className="beer_3d_button" onClick={() => onClick()}>
      <img src={_360Deg} alt="3d review" />
    </button>
  );
};

Button3dUI.propTypes = {
  onClick: PropTypes.func,
};
