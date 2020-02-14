import React from 'react'
import PropTypes from 'prop-types'

const TableRow = ({ dense, children }) => (
  <tr className={`${dense ? 'dense' : ''}`}>
    { children }
  </tr>
);

TableRow.propTypes = {
  dense: PropTypes.bool.isRequired,
  children: PropTypes.array.isRequired
};

export default TableRow
