const initialState = {
  users: [
    {
      username: "zblteq",
      email: "zblteq@mail.com",
      status: "active",
    },
    {
      username: "zblteq",
      email: "zblteq@mail.com",
      status: "active",
    },
    {
      username: "zblteq",
      email: "zblteq@mail.com",
      status: "blocked",
    },
  ],
};

const userReducer = (state = initialState, action) => {
  //   console.log("action di reducer:", action);
  switch (action.type) {
    case "fetchUsers":
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
