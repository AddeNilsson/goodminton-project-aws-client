import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';
import './List.scss';

const ListWithItems = ({ items }) => (
  <ul className="list">
    { items.length > 0 && items.map(i => (
      <ListItem>
        { i.label }
      </ListItem>
    )) }
  </ul>
);

const List = ({ items, children }) => (
  items && items.length > 0
    ? <ListWithItems items={items} />
  : (
    <ul className="list">
      { children }
    </ul>
  )
);

List.propTypes = {

};

export default List;
