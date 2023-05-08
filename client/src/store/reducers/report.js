const initialState = {
  reports: [],
};

const reportReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetchReportSuccess":
      return {
        ...state,
        reports: action.payload,
      };
    default:
      return state;
  }
};

export default reportReducer;
