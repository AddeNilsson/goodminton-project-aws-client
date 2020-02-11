import React from "react";

import "./Button.scss";

const Button = ({
  isLoading,
  disabled = false,
  color,
  handleClick,
  children,
  fullWidth,
}) => (
  <button
    className={`button ${color === 'blue' ? 'blue' : 'transparent'} ${fullWidth ? 'full-width' : ''}`}
    disabled={disabled || isLoading}
    onClick={handleClick}
  >
    { isLoading ? 'Loading..' : children }
  </button>
);

export default Button;
