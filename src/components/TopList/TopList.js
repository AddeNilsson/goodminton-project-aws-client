import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Card } from '../Card';
import { List, ListItem, ListHeader } from '../List';

const TopList = ({ playersData, getPlayersData, rowLimit }) => (
  <Card>
    <ListHeader dense>
      <h4>Top { rowLimit }</h4>
    </ListHeader>
    <List>
      { playersData
        .slice(0, rowLimit)
        .map(p => (
          <ListItem divider dense key={p.userId}>
            <p>{ p.nickname || 'anonyous' }</p>
            <p>{ p.winRatio }</p>
          </ListItem>
        ))}
    </List>
  </Card>
);

TopList.propTypes = {
  playersData: PropTypes.array.isRequired,
  rowLimit: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  playersData: state.player.playersData,
});

export default connect(
  mapStateToProps,
  null)(TopList);
