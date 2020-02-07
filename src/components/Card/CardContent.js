import React from 'react';
import PropTypes from 'prop-types';

const CardContent = ({ children }) => (
  <div className="card-content">
    { children }
  </div>
);

CardContent.propTypes = {
  children: PropTypes.any.isRequired,
};

export default CardContent;
