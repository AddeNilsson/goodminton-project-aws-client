import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getPlayerData, registerGame } from '../../actions'
import { Card, CardImage } from '../../components/Card';
import Grid from '../../components/Grid';
import img from '../../assets/img/img.jpg';
import { ButtonField, DashboardMain } from '../../components/Dashboard';

const Home =({ isLoading, playerData, getPlayerData, user, history, isAuthenticated, register }) => {
  const error = 'Fel FEL Felll!!';
  useEffect(() => {
    if (user) {
      const { username } = user; //  -> user.attributes.sub ??
      getPlayerData({ id: username });
    }
    if(!isAuthenticated) history.push('/sign-in');
  }, [user, isAuthenticated, history, getPlayerData]);

  return (
    <Grid row classes="flex-center">
      <Grid xs={12} sm={10} md={8} lg={6} xl={5}>
        <Card>
          <CardImage imgUrl={img} />
          <DashboardMain
            playerData={playerData}
            error={error}
            handleViewLogs={() => false}
          />
          <ButtonField
            handleRegister={register}
            isLoading={isLoading}
            {...playerData}
          />
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
