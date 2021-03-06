const initialState = {
  app: {
    isLoading: false,
    loading: 0,
    errors: [],
  },
  auth: {
    isAuthenticated: false,
    user: null,
    pendingConfirm: false,
  },
  player: {
    playerData: {
      won: 0,
      lost: 0,
      wo: 0,
      gamesTotal: 0,
      winRatio: 0,
      touched: 0,
      nickname: '',
    },
  },
  players: {
    data: []
  },
  logs: {
    isLoading: false,
    loading: 0,
    playerLogs: [],
  },
};

export default initialState;
