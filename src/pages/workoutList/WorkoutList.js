import "./WorkoutList.scss";

import React from "react";
import { selectWorkouts } from "../../store/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import { logOut } from "../../store/auth/actions";
import { useHistory } from "react-router-dom";
import { getWorkoutExercises } from "../../store/workouts/actions";

export default function WorkoutList() {
  const workouts = useSelector(selectWorkouts);
  const dispatch = useDispatch(logOut);
  const history = useHistory();

  const onLogOut = () => {
    dispatch(logOut());
    history.push("/login");
  };

  const onStartWorkout = (workoutId, workoutName) => {
    dispatch(getWorkoutExercises(workoutId, workoutName));
    history.push("/workout");
  };

  return (
    <div className="workoutlist-page">
      <h1 className="workoutlist-title">Workouts</h1>
      <div className="workoutlist-parent" style={{ height: `440px` }}>
        {workouts.map((w) => {
          const workoutId = w.id;
          return (
            <div key={w.id} className="workout-title">
              {w.name}
              <div className="icon-start">
                <IconButton onClick={() => onStartWorkout(w.id, w.name)}>
                  <PlayCircleFilledIcon />
                </IconButton>
              </div>
              <div className="icon-close">
                <IconButton>
                  <CloseIcon />
                </IconButton>
              </div>
            </div>
          );
        })}
      </div>
      <IconButton
        style={{
          backgroundColor: "#E9E9E9",
          border: "1px solid #8B8B8B",
          width: "45px",
          height: "45px",
          position: "absolute",
          bottom: 0,
          left: 0,
          margin: "15px",
        }}
      >
        <DashboardOutlinedIcon style={{ fontSize: "30px" }} />
      </IconButton>
      <IconButton
        style={{
          backgroundColor: "#E9E9E9",
          border: "1px solid #8B8B8B",
          width: "45px",
          height: "45px",
          position: "absolute",
          bottom: 0,
          right: 0,
          margin: "15px",
        }}
      >
        <AddIcon fontSize="large" />
      </IconButton>
      <IconButton
        style={{
          width: "45px",
          height: "45px",
          position: "absolute",
          top: 0,
          right: 0,
          margin: "27px 15px 15px 15px",
        }}
        onClick={() => onLogOut()}
      >
        <ExitToAppOutlinedIcon className="icon-icon" fontSize="large" />
      </IconButton>
    </div>
  );
}
