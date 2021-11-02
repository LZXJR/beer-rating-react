import ReactImageMagnify from "react-image-magnify";
import { usePrepareResponse } from "../../../shared/usePrepareResponse.js";
import { useState } from "react";
import { Loading } from "../../../shared/loading/ui/Loading.jsx";
import "./style.css"

import PropTypes from 'prop-types';

export const BeerPhotoUI = ({id}) => {
  const [beerPhoto, setBeerPhoto] = useState(null);
  usePrepareResponse(setBeerPhoto, "beerPhoto", id);

  return (
    <div className="briefly_about_beer_item white_bg_and_border_radius">
      {beerPhoto ? (
        <ReactImageMagnify
          className="zoom_beer_photo"
          enlargedImageContainerDimensions={{
            width: "208%",
            height: "100%",
          }}
          {...{
            smallImage: {
              alt: "Stella beer",
              isFluidWidth: false,
              src: beerPhoto.data,
              width: 131,
              height: 528,
            },
            largeImage: {
              src: beerPhoto.data,
              width: 272,
              height: 1057,
            },
          }}
        />
      ) : (
        <Loading
          type="bars"
          color="#ff9100"
          height="40px"
          width="40px"
          platformHeight="100%"
        />
      )}
    </div>
  );
};


BeerPhotoUI.propTypes = {
  id:PropTypes.number.isRequired
}