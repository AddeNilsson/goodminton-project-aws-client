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
import LoadingSpinner from './components/LoadingSpinner';
/*
import store from './store/store'
  store.dispatch(someInitialDataToRequest);

  TODO:
   - redirect after login: can be done with a wrapping route component
   - restructure separated account verify: we need pasw username email and veriication code here..
   - Error message handling
   - Proptypes && eslint-airbnb
*/

const App = ({ isLoading, getCurrentUser, signOutUser, isAuthenticated }) => {
  const [drawerOpen, openDrawer] = useState(false);

  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  return (
    <Router>
      <>
        <LoadingSpinner blocker active={isLoading} />
        <AppHeader
          openDrawer={() => openDrawer(true)}
          signOutUser={signOutUser}
          isAuthenticated={isAuthenticated}
        />
        <Drawer open={drawerOpen} closeDrawer={() => openDrawer(false)}>
          <Navigation handleDrawerClose={() => openDrawer(false)}/>
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
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getCurrentUser,
  signOutUser,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
