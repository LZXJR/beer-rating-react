import PropTypes from 'prop-types';

import {RatingItemUI} from "../ui/RatingItemUI"

RatingItemUI.propTypes={
    place:PropTypes.string.isRequired,
    name:PropTypes.string,
    color:PropTypes.string.isRequired,
    filtration:PropTypes.string.isRequired,
    grade:PropTypes.number.isRequired
  }