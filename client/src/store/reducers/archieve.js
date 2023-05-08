const initialState = {
  archieves: {},
};

const archieveReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetchArchievedSuccess":
      return {
        ...state,
        archieves: action.payload,
      };
    default:
      return state;
  }
};

export default archieveReducer;
