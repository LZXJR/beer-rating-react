import "./style.css";


export const BeerDescriptionUI = () => {
  return (
    <div className={"beer_description white_bg_and_border_radius"}>
      <h3 className="beer_title">DETAILED DESCRIPTION</h3>
      <hr className="beer_hr" />
      <div className="beer_description_table">
        <h4>Country</h4>
        <p>Belgium</p>

        <h4>Manufacturer</h4>
        <p>AB InBev</p>

        <h4>Сost</h4>
        <p>0,91$</p>

        <h4>Sort</h4>
        <p>Camp</p>

        <h4>Color</h4>
        <p>Light</p>

        <h4>Filtration</h4>
        <p>Yes</p>

        <h4>Alcohol content</h4>
        <p>HZ</p>

        <h4>Density</h4>
        <p>12%</p>

        <h4>Composition</h4>
        <p>
          Malting malting barley, rice or corn, groats or maltose molasses,
          hops.
        </p>

        <h4>Shelf life</h4>
        <p>9 months</p>

        <h4>Storage conditions</h4>
        <p>In a dark place at a temperature of 0 to 30</p>

        <h4>Official site</h4>
        <a target="_blank" rel="noreferrer" href="http://www.stellaartois.com">
          http://www.stellaartois.com
        </a>
      </div>
    </div>
  );
};
