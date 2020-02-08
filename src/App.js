import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { getCurrentUser, signOutUser } from './actions/authActions';
import Routes from './Routes';
import AppHeader from './components/AppHeader';
import Drawer from './components/Drawer';
import Navigation from './components/Navigation';
/*
import store from './store/store'
  store.dispatch(someInitialDataToRequest);
*/

const App = ({ isLoading, getCurrentUser, signOutUser }) => {
  const [drawerOpen, openDrawer] = useState(false);

  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  return (
    <Router>
      <>
        <AppHeader openDrawer={ () => openDrawer(true)} signOutUser={signOutUser} />
        <Drawer open={drawerOpen} closeDrawer={() => openDrawer(false)}>
          <Navigation />
        </Drawer>
        <main>
          <Routes />
        </main>
      </>
    </Router>
  );
}
App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isLoading: state.app.isLoading,
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getCurrentUser,
  signOutUser,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
