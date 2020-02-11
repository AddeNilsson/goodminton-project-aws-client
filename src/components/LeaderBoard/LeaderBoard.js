import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getPlayersData } from '../../actions';
import Table from '../Table';

const columns = [
  { id: 'nickname', label: 'Player' },
  { id: 'won', label: 'Won' },
  { id: 'lost', label: 'Lost' },
];

const LeaderBoard = ({ playersData, getPlayersData, rowLimit }) => {
  useEffect(() => {
    getPlayersData();
  }, [getPlayersData]);

  const rows = rowLimit
    ? playersData.splice(0, rowLimit)
    : playersData;

  return (
    <Table columns={columns}>
      {rows.map(r => (
        <tr key={r.playerDataId}>
          {columns.map(c => (
            <td key={c.id}>{ r[c.id] }</td>
          ))}
        </tr>
      ))}
    </Table>
  );
};

LeaderBoard.propTypes = {};

const mapStateToProps = state => ({
  playersData: state.player.playersData,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getPlayersData,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps)(LeaderBoard);
