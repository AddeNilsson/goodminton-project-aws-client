import React from 'react';
import PropTypes from 'prop-types';

import './ListHeader.scss';

const ListHeader = ({ children, dense }) => (
  <div className={`list-header ${dense ? 'dense': ''}`}>
    { children }
  </div>
);

ListHeader.propTypes = {
  children: PropTypes.any.isRequired,
};

export default ListHeader;
