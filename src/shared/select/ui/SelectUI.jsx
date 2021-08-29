import "./style.css";

export const SelectUI = ({ options, setState }) => {
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
      onChange={(event) => setState(event.target.value)}
    >
      {getOptions()}
    </select>
  );
};
