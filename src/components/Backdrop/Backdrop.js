import React from 'react';
import PropTypes from 'prop-types';
import './Backdrop.scss';

const Backdrop = ({ children, show, dark }) => {
  const classes = `${show ? 'backdrop-show' : 'backdrop-hide'} ${dark ? 'dark' : ''}`
  return (
    <div className={`backdrop ${classes}`}>
      { show && children }
    </div>
  );
};

Backdrop.propTypes = {
  children: PropTypes.any.isRequired,
  show: PropTypes.bool.isRequired,
  dark: PropTypes.bool,
};

Backdrop.defaultProps = {
  dark: false,
};

export default Backdrop;
