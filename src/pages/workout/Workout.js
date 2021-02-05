import "./Workout.scss";

import React, { useState, useEffect } from "react";
import ExerciseCard from "./components/ExerciseCard";
import { selectWorkout } from "../../store/workouts/selectors";
import { useSelector } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import GolfCourseOutlinedIcon from "@material-ui/icons/GolfCourseOutlined";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export default function Workout() {
  const workout = useSelector(selectWorkout);
  const [workoutState, setWorkoutState] = useState([]);

  useEffect(() => {
    const state = workout.exercises.map((e) => {
      const newObject = {
        workoutStart: null,
        workoutId: workout.workoutId,
        id: e.exercise.id,
        kg: null,
        sets: null,
        reps: null,
        RPE: null,
      };
      return newObject;
    });
    setWorkoutState(state);
  }, [workout]);

  const setExState = (id, key, value) => {
    const newState = workoutState.map((e) => {
      if (e.id === id) {
        return { ...e, [key]: value };
      } else {
        return e;
      }
    });
    setWorkoutState(newState);
  };

  return (
    <div className="workout-page">
      <h1 className="workoutlist-title">{workout.workoutName}</h1>
      <div className="exercise-cards">
        {workout.exercises.map((w, i) => {
          return (
            <div key={i} style={{ margin: "5px 0" }}>
              <ExerciseCard
                name={w.exercise.name}
                exerciseId={w.exercise.id}
                setExState={setExState}
              />
            </div>
          );
        })}
      </div>
      <div className="icon-start">
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
          <ArrowBackIcon />
        </IconButton>
      </div>
      <div className="icon-close">
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
          <GolfCourseOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
}
