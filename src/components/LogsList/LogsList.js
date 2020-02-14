import React from 'react'
import PropTypes from 'prop-types'

import { Table, TableRow } from '../Table';
import LoadingSpinner from '../LoadingSpinner';
import Grid from '../Grid';
import IconButton from '../IconButton';

const columns = [
  { id: 'actionText', label: 'Action' },
  { id: 'amountWin', label: 'Won' },
  { id: 'amountLost', label: 'Lost' },
  { id: 'amountWo', label: 'Wlk-overs' },
  { id: 'amountGamesTotal', label: 'Total Games' },
  { id: 'action', label: 'Revert' },
];

const LogsList = ({ logs, isLoading, handleRevert }) => {
  return (
    <Grid row classes="flex-center">
      <Grid xs={12}>
        { isLoading
          ? <LoadingSpinner blocker={false} active={isLoading} color="dark" />
          : (
            <Table columns={columns} dense>
              {logs.map(r => (
                <TableRow key={r.key} dense>
                  {columns.map(c => (
                    c.id !== 'action'
                    ? <td key={c.id}>{ r[c.id] }</td>
                    : (
                      <td key={c.id}>
                        <IconButton small handleClick={() => false}>
                          <i className="material-icons">delete_forever</i>
                        </IconButton>
                      </td>
                    )
                  ))}
                </TableRow>
              ))}
            </Table>
          )}
      </Grid>
    </Grid>
  )
}

LogsList.propTypes = {
  logs: PropTypes.array.isRequired,
};

export default LogsList
