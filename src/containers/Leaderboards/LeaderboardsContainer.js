import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { mapKeyToItems } from '../../helpers';
import { getPlayersData } from '../../actions';
import Leaderboard from '../../components/Leaderboard';


const LeaderboardsContainer = ({ playersData, getPlayersData }) => {
  useEffect(() => {
    if (playersData.length < 1) {
      getPlayersData();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <Leaderboard items={playersData} />;
};

LeaderboardsContainer.propTypes = {
  getPlayersData: PropTypes.func.isRequired,
  playersData: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  playersData: mapKeyToItems(state.players.data, 'userId'),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getPlayersData,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps)(LeaderboardsContainer);
