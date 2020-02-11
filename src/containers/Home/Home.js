import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MaterialIcon from 'material-icons-react';

import { getPlayerData, registerGame } from '../../actions'
import { Card, CardContent, CardImage } from '../../components/Card';
import Grid from '../../components/Grid';
import img from '../../assets/img/img.jpg';
import Button from '../../components/Button';
import PlayerDetails from '../../components/PlayerDetails';

const Home =({ isLoading, playerData, getPlayerData, user, history, isAuthenticated, register }) => {
  const error = '';
  useEffect(() => {
    if (user) {
      const { username } = user; //  -> user.attributes.sub ??
      getPlayerData({ id: username });
    }
    if(!isAuthenticated) history.push('/sign-in');
  }, [user, isAuthenticated, history, getPlayerData]);

  const { winRatio, gamesTotal, won, lost, wo } = playerData;

  return (
    <Grid row classes="flex-center">
      <Grid xs={12} sm={10} md={8} lg={6} xl={5}>
        <Card>
          <CardImage imgUrl={img} />
          <CardContent>
            <h2>Welcome</h2>
            <p>Ratio: { winRatio  }</p>
            <p className="text-body">
              Register a game outcome using buttons or multiple games below.
              Walkover registers 6 losses.
              Edit / Undo registration by using the log.
            </p>
            { error && <h6 classname="text-center" color="error">{ error.message }</h6>}
          </CardContent>
          <Grid row>
            <Grid item xs={12} md={6}>
              <PlayerDetails
                {...playerData}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              {/*<TopList setLoading={setLoading} rowLimit={4} />*/}
            </Grid>
          </Grid>
          <CardContent>
            <Grid classes="flex-wrap" row>
              <Grid xs={12} sm={4}>
                <Button
                  handleClick={() => register({ gamesTotal: gamesTotal + 1, won: won + 1 })}
                  disabled={isLoading}
                  fullWidth
                  color="blue"
                >
                  <MaterialIcon icon="menu" /> Win
                </Button>
              </Grid>
              <Grid xs={12} sm={4}>
                <Button
                  handleClick={() => register({ gamesTotal: gamesTotal + 1, lost: lost + 1 })}
                  disabled={isLoading}
                  fullWidth
                  color="blue"
                >
                  <MaterialIcon icon="mood"/>Lost
                </Button>
              </Grid>
              <Grid xs={12} sm={4}>
                <Button
                  handleClick={() => register({ gamesTotal: gamesTotal + 6, wo: wo + 1, lost: lost + 6 })}
                  disabled={isLoading}
                  fullWidth
                  color="blue"
                >
                  <MaterialIcon icon="mood" /> Walkover
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => ({
  isLoading: state.app.isLoading,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  playerData: state.player.playerData,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getPlayerData,
  register: registerGame,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
