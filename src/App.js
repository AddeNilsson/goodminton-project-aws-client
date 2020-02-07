import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { getData } from './actions/actions';
import Routes from './Routes';
import AppHeader from './components/AppHeader';
import Drawer from './components/Drawer';
import Navigation from './components/Navigation';
/*
import store from './store/store'
  store.dispatch(someInitialDataToRequest);
*/

const App = ({ isLoading, getData }) => {
  const [drawerOpen, openDrawer] = useState(false);
  return (
    <Router>
      <>
        <AppHeader openDrawer={ () => openDrawer(true)}/>
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
  getData,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
