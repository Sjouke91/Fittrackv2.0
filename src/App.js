import "./App.css";

import React, { useEffect } from "react";
import Login from "./pages/login/Login";
import { useDispatch, useSelector } from "react-redux";

import { Switch, Route, useHistory } from "react-router-dom";
import WorkoutList from "./pages/workoutList/WorkoutList";
import SignUp from "./pages/signup/SignUp";
import { getUserWithStoredToken } from "./store/auth/actions";
import { selectToken } from "./store/auth/selectors";
import Workout from "./pages/workout/Workout";

function App() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
    if (token === null) {
      history.push("/login");
    }
  }, [dispatch, history]);

  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route exact path="/workoutlist" component={WorkoutList} />
        <Route exact path="/workout/" component={Workout} />
      </Switch>
    </div>
  );
}

export default App;
