import { combineReducers } from "redux";
import ActionMovieReducer from "./action";
import HorrorMovieReducer from "./horror";
export default combineReducers({
  ActionMovieReducer,
  HorrorMovieReducer,
});
