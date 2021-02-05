import "./ExerciseCard.scss";

import React, { useState } from "react";
import DoneOutlinedIcon from "@material-ui/icons/DoneOutlined";
import IconButton from "@material-ui/core/IconButton";

export default function ExerciseCard({ name, exerciseId, setExState }) {
  const [showInput, set_showInput] = useState(false);

  const onDoneExercise = () => {
    set_showInput(!showInput);
  };

  return (
    <div
      className="exercise-card"
      style={{ height: showInput ? "40px" : null }}
    >
      <div className="exercise-title">
        <h3 className="exercise-title">{name}</h3>
        <IconButton
          size="small"
          style={{
            position: "absolute",
            right: 20,
            marginTop: "5px",
            border: "1px solid grey",
          }}
          onClick={() => onDoneExercise()}
        >
          <DoneOutlinedIcon style={{ fontSize: "20px" }} />
        </IconButton>
      </div>
      <div className={showInput ? "show-input" : null}>
        <div className="input-types">
          <p>kg</p>
          <p>reps</p>
          <p>sets</p>
          <p>RPE</p>
        </div>
        <div className="input-fields">
          <input
            type="number"
            onChange={(e) => {
              setExState(exerciseId, "kg", parseInt(e.target.value));
            }}
          ></input>
          <input
            type="number"
            onChange={(e) => {
              setExState(exerciseId, "reps", parseInt(e.target.value));
            }}
          ></input>
          <input
            type="number"
            onChange={(e) => {
              setExState(exerciseId, "sets", parseInt(e.target.value));
            }}
          ></input>
          <input
            type="number"
            onChange={(e) => {
              setExState(exerciseId, "RPE", parseInt(e.target.value));
            }}
          ></input>
        </div>
      </div>
    </div>
  );
}
