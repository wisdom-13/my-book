import { combineReducers } from "redux";
import auth from "./auth";
import { connectRouter } from "connected-react-router";
import { History } from "history";

const reducer = (history: History) => combineReducers({
  auth,
  router: connectRouter(history),
})

export default reducer;