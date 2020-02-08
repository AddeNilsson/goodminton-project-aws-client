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
  mock: {
    data: null,
  },
};

export default initialState;
