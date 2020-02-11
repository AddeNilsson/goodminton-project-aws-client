import React from 'react';
import PropTypes from 'prop-types';

import './ListItem.scss';

const ListItem = ({ children, dense, active, divider }) => {
  const classNames = [
    dense && 'dense',
    active && 'active',
    divider && 'divider',
    'text-body',
  ].reduce((acc, cur) => (
    cur ? `${cur} ${acc}` : acc
  ), '');
  return (
    <li className={classNames}>
      { children }
    </li>
  );
};

ListItem.propTypes = {

};

export default ListItem;
