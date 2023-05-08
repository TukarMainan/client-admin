const initialState = {
  category: "",
};

const oneCategoryReducer = (state = initialState, action) => {
  //   console.log("action di reducer:", action);
  switch (action.type) {
    case "fetchOneCategorySuccess":
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};

export default oneCategoryReducer;
