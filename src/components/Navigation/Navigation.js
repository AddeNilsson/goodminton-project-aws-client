import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, NavLink } from 'react-router-dom';

import List from '../List';
import ListItem from '../List/ListItem';
import './Navigation.scss';

const menuData = [
  { path: '/', label: 'Home', activePath: ['/sign-in', '/dashboard'] },
  { path: '/leaderboards', label: 'Leaderboards', activePath: ['/leaderboards'] },
  { path: '/about', label: 'About', activePath: ['/about'] },
];

const Navigation = ({ match, history }) => {
  const current = history.location.pathname;
  return (
    <div id="nav" className="navigation">
      <List>
        {menuData.map(i => (
          <NavLink
            activeClassName="active"
            key={i.path}
            to={i.path}
            // @click.native="$emit('onNavigate')"
          >
            <ListItem
              active={i.activePath.indexOf(current) !== -1}
            >{ i.label }</ListItem>
        </NavLink>
        ))}
      </List>
    </div>
  );
};

Navigation.propTypes = {

};

export default withRouter(Navigation);
