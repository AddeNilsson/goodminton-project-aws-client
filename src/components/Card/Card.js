import React from 'react';
import PropTypes from 'prop-types';

import './Card.scss';

const Card = ({ children }) => (
  <div className="card">
    { children }
  </div>
);

Card.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Card;
