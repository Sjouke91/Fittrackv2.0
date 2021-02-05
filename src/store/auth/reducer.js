import {
  LOG_OUT,
  LOGIN_SUCCESS,
  TOKEN_STILL_VALID,
  USER_WORKOUTS_FETCHED,
} from "./actions";

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  gender: null,
  heightInCm: null,
  weightInKg: null,
  workouts: [],
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };

    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    case TOKEN_STILL_VALID:
      return { ...state, ...action.payload };

    case USER_WORKOUTS_FETCHED:
      const workouts = action.payload.map((w) => {
        return w.workout;
      });
      return { ...state, workouts: workouts };

    default:
      return state;
  }
}
