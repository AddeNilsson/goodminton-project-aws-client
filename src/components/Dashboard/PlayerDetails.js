import React from 'react';
import PropTypes from 'prop-types';

import { Card } from '../Card';
import { List, ListItem, ListHeader } from '../List';

const PlayerDetails = ({
  winRatio, won, lost, wo, gamesTotal, touched, nickname,
}) => (
  <Card>
    <ListHeader dense>
      <h4>Stats for { nickname }</h4>
    </ListHeader>
    <List>
      <ListItem dense divider>
        <p>Ratio: {winRatio}</p>
      </ListItem>
      <ListItem dense divider>
        <p>Won: {won}</p>
        <p>Lost: {lost}</p>
      </ListItem>
      <ListItem dense divider>
        <p>Wlk-overs: {wo}</p>
        <p>Games: {gamesTotal}</p>
      </ListItem>
      <ListItem dense divider>
        <p>Updated: {touched}</p>
      </ListItem>
    </List>
  </Card>
);

PlayerDetails.propTypes = {
  winRatio: PropTypes.number.isRequired,
  won: PropTypes.number.isRequired,
  lost: PropTypes.number.isRequired,
  wo: PropTypes.number.isRequired,
  gamesTotal: PropTypes.number.isRequired,
  nickname: PropTypes.string.isRequired,
  touched: PropTypes.number.isRequired,
};

export default PlayerDetails;
