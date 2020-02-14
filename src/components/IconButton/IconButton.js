import React from 'react';
import PropTypes from 'prop-types';

import './IconButton.scss';

const IconButton = ({ disabled, children, handleClick, isLoading, small }) => (
  <button
    className="icon-button"
    disabled={disabled || isLoading}
    onClick={handleClick}
  >
    <div className={`icon-button-inner ${small ? 'btn-sm' : 'btn-size'}`}>
      { children }
    </div>
  </button>
);

export default IconButton;
