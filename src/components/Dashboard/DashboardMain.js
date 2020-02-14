import React from 'react';
import PropTypes from 'prop-types';

import { CardContent } from '../Card';
import Grid from '../Grid';
import Button from '../Button';
import PlayerDetails from './PlayerDetails';
import TopList from '../../containers/TopList';

const DashboardMain = ({
  playerData, playerData: { nickname, winRatio }, error, handleViewLogs, playersData,
}) => (
  <>
    <CardContent>
      <Grid row classes="flex-wrap">
        <Grid xs={12}>
          { error && <h4 className="text-center text-error">{ error }</h4>}
        </Grid>
        <Grid xs={12} md={8}>
          <h2>Welcome { nickname }</h2>
          <p>Ratio: { winRatio  }</p>
          <p className="text-body">
            Register a game outcome using buttons or multiple games below.
            Walkover registers 6 losses.
            Edit / Undo registration by using the log.
          </p>
        </Grid>
        <Grid xs={12} md={4}>
          <Grid row classes="justify-end">
            <div>
              <Button color="blue" handleClick={handleViewLogs}>
                Logs
              </Button>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </CardContent>
    <CardContent>
      <Grid row gutters classes="flex-wrap">
        <Grid xs={12} md={7}>
          <PlayerDetails
            {...playerData}
          />
        </Grid>
        <Grid xs={12} md={5}>
          <TopList rowLimit={4} playersData={playersData} />
        </Grid>
      </Grid>
    </CardContent>
  </>
);

DashboardMain.propTypes = {
  handleViewLogs: PropTypes.func.isRequired,
  playerData: PropTypes.shape({
    nickname: PropTypes.string.isRequired,
    winRatio: PropTypes.number.isRequired,
    gamesTotal: PropTypes.number.isRequired,
    won: PropTypes.number.isRequired,
    lost: PropTypes.number.isRequired,
    wo: PropTypes.number.isRequired,
  }),
  error: PropTypes.string.isRequired,
};

export default DashboardMain;
