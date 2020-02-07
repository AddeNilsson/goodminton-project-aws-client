import React from 'react';
import PropTypes from 'prop-types';

const CardImage = ({ imgUrl }) => (
  <div
    className="card-image"
    style={{ backgroundImage: `url(${imgUrl})`}}
  />
);

CardImage.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};

export default CardImage;
