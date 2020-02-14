import React from 'react';
import PropTypes from 'prop-types';

import { CardContent } from '../../components/Card';
import Grid from '../../components/Grid';
import Button from '../../components/Button';

const ButtonField = ({ handleRegister, gamesTotal, won, lost, wo, isLoading }) => (
  <CardContent>
    <Grid classes="flex-wrap" row>
      <Grid xs={12} sm={4}>
        <Button
          handleClick={() => handleRegister({
            gamesTotal: gamesTotal + 1, won: won + 1, state: 'win',
          })}
          disabled={isLoading}
          fullWidth
          color="blue"
        >
          <i className="material-icons text-white">sentiment_satisfied_alt</i>
           Win
        </Button>
      </Grid>
      <Grid xs={12} sm={4}>
        <Button
          handleClick={() => handleRegister({
            gamesTotal: gamesTotal + 1, lost: lost + 1, state: 'lost',
          })}
          disabled={isLoading}
          fullWidth
          color="blue"
        >
        <i className="material-icons text-white">sentiment_dissatisfied</i> Lost
        </Button>
      </Grid>
      <Grid xs={12} sm={4}>
        <Button
          handleClick={() => handleRegister({
            gamesTotal: gamesTotal + 6, wo: wo + 1, lost: lost + 6, state: 'wo',
          })}
          disabled={isLoading}
          fullWidth
          color="blue"
        >
          <i className="material-icons text-white">sentiment_very_dissatisfied</i> Walkover
        </Button>
      </Grid>
    </Grid>
  </CardContent>
);

ButtonField.propTypes = {
  handleRegister: PropTypes.func.isRequired,
  gamesTotal: PropTypes.number.isRequired,
  won: PropTypes.number.isRequired,
  lost: PropTypes.number.isRequired,
  wo: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default ButtonField;
