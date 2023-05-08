const initialState = {
  admin: {
    username: "zblteq",
    email: "zblteq@mail.com",
  },
};

const adminReducer = (state = initialState, action) => {
  //   console.log("action di reducer:", action);
  switch (action.type) {
    case "fetchAdminInfo":
      return {
        ...state,
        admin: action.payload,
      };
    default:
      return state;
  }
};

export default adminReducer;
