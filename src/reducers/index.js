import { combineReducers } from "redux";
import games from "./games";
import accounts from "./accounts";

export default combineReducers({
  games,
  accounts
});