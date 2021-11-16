import "./style.css";
import noBeerIcon from "./img/no-alcohol.svg";

export const ErrorUI = ({errorCode}) => {
  return (
    <div className="error">
      <div className="error_item">
        <h3 className="error_code">{errorCode}</h3>
        <img src={noBeerIcon} alt="no beer" className="error_icon"/>
      </div>
    </div>
  );
};
