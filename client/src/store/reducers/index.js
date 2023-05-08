import { combineReducers } from "redux";

import adminReducer from "./adminInfo";
import userReducer from "./user";
import postReducer from "./posts";
import reportReducer from "./report";
import detailReducer from "./detail";
import archieveReducer from "./archieve";
import categoryReducer from "./category";
import oneCategoryReducer from "./oneCategory";
import logReducer from "./log";

const rootReducer = combineReducers({
  adminReducer,
  userReducer,
  postReducer,
  reportReducer,
  detailReducer,
  archieveReducer,
  categoryReducer,
  oneCategoryReducer,
  logReducer,
});

export default rootReducer;
