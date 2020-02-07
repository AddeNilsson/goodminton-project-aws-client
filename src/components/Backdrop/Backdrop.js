import React from 'react';
import PropTypes from 'prop-types';
import './Backdrop.scss';

const Backdrop = ({ children, show, dark }) => {
  const classes = `${show ? 'backdrop-show' : 'backdrop-hide'} ${dark ? 'dark' : ''}`
  return (
    <div className={`drawer-backdrop ${classes}`}>
      { children }
    </div>
  );
};

Backdrop.propTypes = {

}

export default Backdrop;
