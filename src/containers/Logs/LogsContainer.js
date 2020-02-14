import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { mapKeyToItems } from '../../helpers';
import { getPlayerLogs } from '../../actions';
import LogsList from '../../components/LogsList';

const LogsContainer = ({ getPlayerLogs, logs, isLoading }) => {
  useEffect(() => {
    getPlayerLogs();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <LogsList logs={logs} isLoading={isLoading} />
  )
}

LogsContainer.propTypes = {
  getPlayerLogs: PropTypes.func.isRequired,
  logs: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  logs: mapKeyToItems(state.logs.playerLogs, 'logId'),
  isLoading: state.logs.isLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getPlayerLogs,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogsContainer)
