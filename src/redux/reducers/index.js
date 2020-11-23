import { combineReducers } from "redux";
import gameReducer from "./gameReducer";
import globalReducer from "./globalReducer";
export default combineReducers({
  gameReducer,
  globalReducer,
});
