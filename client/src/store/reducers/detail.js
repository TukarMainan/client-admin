const initialState = {
  detail: {},
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetchDetailSuccess":
      return {
        ...state,
        detail: action.payload,
      };
    default:
      return state;
  }
};

export default detailReducer;
