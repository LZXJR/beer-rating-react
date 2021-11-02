import "./style.css";
import noBeerIcon from "./img/no-alcohol.svg";

export const Error404UI = () => {
  return (
    <div className="error404">
      <div className="error404_item">
        <h3>404</h3>
        <img src={noBeerIcon} alt="no beer"/>
      </div>
    </div>
  );
};
