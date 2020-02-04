const initialState = {
  app: {
    isLoading: false,
    loading: 0,
    errors: [],
  },
  auth: {
    isAuthenticated: false,
    user: {},
  },
  mock: {
    data: null,
  },
};

export default initialState;
