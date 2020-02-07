import React from 'react';
import PropTypes from 'prop-types';

import './IconButton.scss';

const IconButton = ({ disabled, children, handleClick, isLoading }) => (
  <button
    className="icon-button"
    disabled={disabled || isLoading}
    onClick={handleClick}
  >
    <div className="icon-button-inner">
      { children }
    </div>
  </button>
);

export default IconButton;
