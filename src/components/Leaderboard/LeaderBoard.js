import React from 'react';
import PropTypes from 'prop-types';

import Table from '../../components/Table';
import { Card, CardContent } from '../../components/Card';
import Grid from '../../components/Grid';

const columns = [
  { id: 'nickname', label: 'Player' },
  { id: 'won', label: 'Won' },
  { id: 'lost', label: 'Lost' },
  { id: 'wo', label: 'Wlk-overs' },
  { id: 'gamesTotal', label: 'Total Games' },
  { id: 'winRatio', label: 'Ratio' },
];

const LeaderBoard = ({ items }) => (
  <Grid row classes="flex-center">
    <Grid xs={12} sm={10} md={8}>
      <Card>
        <CardContent>
          <h1>Leaderboards</h1>
          <Table columns={columns}>
            {items.map(r => (
              <tr key={r.key}>
                {columns.map(c => (
                  <td key={c.id}>{ r[c.id] }</td>
                ))}
              </tr>
            ))}
          </Table>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
);

LeaderBoard.propTypes = {
  items: PropTypes.array.isRequired,
};

export default LeaderBoard;
