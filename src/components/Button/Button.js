import React from "react";

import "./Button.scss";

export default function Button({
  isLoading,
  disabled = false,
  color,
  handleClick,
  children,
}) {
  return (
    <button
      className={`button ${color === 'blue' ? 'blue' : 'transparent'}`}
      disabled={disabled || isLoading}
      onClick={handleClick}
    >
      { isLoading ? 'Loading..' : children }
    </button>
  );
}
