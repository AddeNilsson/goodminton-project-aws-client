import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardContent } from '../Card';
import { List, ListItem } from '../List';
import Button from '../Button';

const PlayerDetails = ({
  winRatio, won, lost, wo, gamesTotal, touched, nickname,
}) => (
  <Card>
    <CardContent>
      <h4>Stats for { nickname }</h4>
    </CardContent>
    <List>
      <ListItem divider>
        <p>Ratio: {winRatio}</p>
        <div>
          <Button color="blue" handleClick={() => false}>
            Logs
          </Button>
        </div>
      </ListItem>
      <ListItem divider>
        <p>Won: {won}</p>
        <p>Lost: {lost}</p>
      </ListItem>
      <ListItem divider>
        <p>Wlk-overs: {wo}</p>
        <p>Games: {gamesTotal}</p>
      </ListItem>
      <ListItem divider>
        <p>Updated: {touched}</p>
      </ListItem>
    </List>
  </Card>
);

PlayerDetails.propTypes = {
  setViewLogs: PropTypes.func.isRequired,
  winRatio: PropTypes.number.isRequired,
  won: PropTypes.number.isRequired,
  lost: PropTypes.number.isRequired,
  wo: PropTypes.number.isRequired,
  gamesTotal: PropTypes.number.isRequired,
  nickname: PropTypes.string.isRequired,
  touched: PropTypes.number.isRequired,
};

// PlayerDetails.defaultProps = {
//   touched: '',
// };

export default PlayerDetails;
