import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getPlayerData, registerGame } from '../../actions'
import Dashboard from '../../components/Dashboard';

const HomeContainer = (props) => {
  const { user, isAuthenticated, history, getPlayerData } = props;
  useEffect(() => {
    if (isAuthenticated) {
      getPlayerData({ id: user.username });
    } else {
      history.push('/sign-in');
    }
  }, [user, isAuthenticated, history, getPlayerData]);

  return <Dashboard {...props} />
};

const mapStateToProps = state => ({
  isLoading: state.app.isLoading,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  playerData: state.player.playerData,
  playersData: state.players.data,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getPlayerData,
  register: registerGame,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
