const initialState = {
  logs: [],
};

const logReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetchLogSuccess":
      return {
        ...state,
        logs: action.payload,
      };
    default:
      return state;
  }
};

export default logReducer;
