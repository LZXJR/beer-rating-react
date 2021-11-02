import "./style.css";

import PropTypes from "prop-types";

export const SelectUI = ({ options, setChoose }) => {
  const getOptions = () =>
    options
      ? options.map((option, id) => (
          <option value={option.value} key={id}>
            {option.name}
          </option>
        ))
      : console.error("Options for select are deserte");

  return (
    <select
      className="global_filter_select"
      onChange={(event) => setChoose(event.target.value)}
    >
      {getOptions()}
    </select>
  );
};

SelectUI.propTypes = {
  options: PropTypes.array.isRequired,
  setChoose: PropTypes.func.isRequired,
};
