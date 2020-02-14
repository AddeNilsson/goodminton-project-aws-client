import React from 'react';

import img from '../../assets/img/img.jpg';
import { getLogEntryRegister } from '../../helpers';
import useModal from '../../hooks/useModal';
import { Card, CardImage } from '../../components/Card';
import Grid from '../../components/Grid';
import Modal from '../../components/Modal';
import DashboardMain from './DashboardMain';
import ButtonField from './ButtonField';
import Logs from '../../containers/Logs';

const Dashboard =({
  isLoading, playerData, getPlayerData, user, history, isAuthenticated, register, playersData,
}) => {
  const error = 'Fel FEL Felll!!';
  const { showModal, openModal, closeModal } = useModal();
  const handleRegister = (newGameData) => {
    const logEntry = getLogEntryRegister(newGameData.state);
    register({ newGameData, logEntry });
  }
  return (
    <>
      <Modal show={showModal === 'viewLogs'} closeModal={closeModal}>
        <Logs />
      </Modal>
      <Grid row classes="flex-center">
        <Grid xs={12} sm={10} md={8} lg={6} xl={5}>
          <Card>
            <CardImage imgUrl={img} />
            <DashboardMain
              playerData={playerData}
              error={error}
              handleViewLogs={() => openModal('viewLogs')}
              playersData={playersData}
            />
            <ButtonField
              handleRegister={handleRegister}
              isLoading={isLoading}
              {...playerData}
            />
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
