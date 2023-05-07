import { combineReducers } from "redux";

import adminReducer from "./adminInfo";
import userReducer from "./user";
import postReducer from "./posts";
import reportReducer from "./report";
import detailReducer from "./detail";
import archieveReducer from "./archieve";

const rootReducer = combineReducers({
  adminReducer,
  userReducer,
  postReducer,
  reportReducer,
  detailReducer,
  archieveReducer,
});

export default rootReducer;
