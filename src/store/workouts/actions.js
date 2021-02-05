import axios from "axios";
import { apiUrl } from "../../config/constants";
import { appLoading, appDoneLoading } from "../appState/actions";

export const GET_WORKOUT_EXERCISES = "GET_WORKOUT_EXERCISES";
export const SELECT_WORKOUT = "SELECT_WORKOUT";

export const getWorkoutExercises = (workoutId, workoutName) => async (
  dispatch,
  getState
) => {
  dispatch(appLoading());

  try {
    const res = await axios.get(`${apiUrl}/exercises/${workoutId}`);
    const exercises = res.data;
    dispatch(workoutExerciseSucces(exercises, workoutName, workoutId));
    dispatch(appDoneLoading());
  } catch (e) {
    console.log("ERROR:", e.message);
  }
};

const workoutExerciseSucces = (exercises, workoutName, workoutId) => {
  return {
    type: GET_WORKOUT_EXERCISES,
    payload: { workoutName, exercises, workoutId },
  };
};
