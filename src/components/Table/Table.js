import React from 'react';
import PropTypes from 'prop-types';
import './Table.scss';

const Table = ({ columns, children, dense }) => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            { columns.map(c => (
              <th
                className={`${ dense ? 'dense' : ''}`}
                key={c.id}
              >{ c.label }</th>
            ))}
          </tr>
        </thead>
        <tbody>
          { children }
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  dense: PropTypes.bool,
};

Table.defaultProps = {
  dense: false,
};

export default Table;
