const initialState = {
  categories: [],
};

const categoryReducer = (state = initialState, action) => {
  //   console.log("action di reducer:", action);
  switch (action.type) {
    case "fetchCategorySuccess":
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
