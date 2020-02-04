import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { getData } from './actions/actions';
import Routes from './routes';

/*
import store from './store/store'
  store.dispatch(someInitialDataToRequest);
*/

const App = ({ isLoading, getData }) => (
  <Router>
    <Routes />
  </Router>
);

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
