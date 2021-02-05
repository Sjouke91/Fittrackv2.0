import { GET_WORKOUT_EXERCISES } from "./actions";

const initialState = {
  workoutName: null,
  workoutId: null,
  exercises: [],
};

// eslint-disable-next-line
export default function workoutReducer(state = initialState, action) {
  switch (action.type) {
    case GET_WORKOUT_EXERCISES:
      return {
        workoutName: action.payload.workoutName,
        workoutId: action.payload.workoutId,
        exercises: action.payload.exercises,
      };
    default:
      return state;
  }
}
