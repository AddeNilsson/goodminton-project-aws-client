import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getPlayersData } from '../../actions';
import Table from '../../components/Table';
import { Card, CardContent } from '../../components/Card';
import Grid from '../../components/Grid';

const columns = [
  { id: 'nickname', label: 'Player' },
  { id: 'won', label: 'Won' },
  { id: 'lost', label: 'Lost' },
  { id: 'wo', label: 'Wlk-overs' },
  { id: 'gamesTotal', label: 'Total Games' },
  { id: 'winRatio', label: 'Ratio' },
];

const LeaderBoard = ({ playersData, getPlayersData }) => {
  useEffect(() => {
    if (playersData.length < 1) {
      getPlayersData();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <Grid row classes="flex-center">
      <Grid xs={12} sm={10} md={8}>
        <Card>
          <CardContent>
            <h1>Leaderboards</h1>
            <Table columns={columns}>
              {playersData.map(r => (
                <tr key={r.userId}>
                  {columns.map(c => (
                    <td key={c.id}>{ r[c.id] }</td>
                  ))}
                </tr>
              ))}
            </Table>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

LeaderBoard.propTypes = {
  getPlayersData: PropTypes.func.isRequired,
  playersData: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  playersData: state.players.data,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getPlayersData,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps)(LeaderBoard);
