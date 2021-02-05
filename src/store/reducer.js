// src/store/reducer.js
import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import appStateReducer from "./appState/reducer";
import workoutReducer from "./workouts/reducer";

const reducer = combineReducers({
  authReducer,
  appStateReducer,
  workoutReducer,
});

export default reducer;
