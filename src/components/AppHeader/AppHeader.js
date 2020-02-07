import React from 'react';
import PropTypes from 'prop-types';
import MaterialIcon from 'material-icons-react';

import Grid from '../Grid';
import Button from '../Button';
import IconButton from '../IconButton';
import './AppHeader.scss';

const AppHeader = ({ user, openDrawer, signOutUser }) => {
  console.log('TODO: disable state');
  return (
    <Grid row gutters classes="app-header text-white">
      <Grid xs={2} md={3}>
        <IconButton handleClick={openDrawer}>
          <MaterialIcon icon="menu" color="#fff" />
        </IconButton>
      </Grid>
      <Grid md={6} classes="hide-md-down text-center">
        <h2>Vueminton Tracker</h2>
      </Grid>
      <Grid row xs={10} md={3} classes="flex-align-center justify-end">
        <div className="margin-side">
          <p>{ user ? user.displayName : '' }</p>
        </div>
        <Button
          disabled={false}
          handleClick={signOutUser}
        >Sign Out</Button>
      </Grid>
    </Grid>
  );
};

AppHeader.propTypes = {
  user: PropTypes.object,
  openDrawer: PropTypes.func.isRequired,
  signOutUser: PropTypes.func.isRequired,
};

export default AppHeader;
