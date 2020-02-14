export const getLogEntryRegister = (state) => ({
    actionText: `register_${state}`,
    amountWin: state === 'win' ? 1 : 0,
    amountLost: state === 'lost' ? 1 : state === 'wo' ? 6 : 0,
    amountWo: state === 'wo' ? 1 : 0,
    amountGamesTotal: state === 'wo' ? 6 : 1,
    revertable: 1,
    reverted: 0,
});

export const getLogEntryBulk = ({ bulkWin, bulkLoss }) => ({
  action_text: 'register_bulk',
  amount_loss: bulkLoss,
  amount_win: bulkWin,
  amount_games_total: bulkWin + bulkLoss,
  amount_wo: 0,
  revertable: 1,
  reverted: 0,
});

export const getLogEntryRevert = ({ entry }) => {
  const {
    action_text, amount_win, amount_loss, amount_games_total, amount_wo,
  } = entry;
  return {
    action_text: `un${action_text}`,
    amount_win: -Math.abs(amount_win),
    amount_loss: -Math.abs(amount_loss),
    amount_wo: -Math.abs(amount_wo),
    amount_games_total: -Math.abs(amount_games_total),
    revertable: 0,
    reverted: 0,
  };
};

export const mapKeyToItems = (data, key) => {
  if (!key) return [];
  return data.map(i => ({
    key: i[key],
    ...i,
  }));
};
