import { combineReducers } from "redux";
import UserReducer from "./UserReducer";

const RootReducer = combineReducers({
  // reducers
  UserReducer,
});

export default RootReducer;
