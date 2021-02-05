import "./SignUp.scss";

import React, { useState } from "react";
import PersonIcon from "@material-ui/icons/Person";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import HeightIcon from "@material-ui/icons/Height";
import { Link } from "react-router-dom";
import SpeedIcon from "@material-ui/icons/Speed";

export default function SignUp() {
  const [newUser, set_newUser] = useState({
    userName: "",
    fullName: "",
    age: "",
    height: "",
    weight: "",
    password: "",
  });

  const onLogin = () => {
    console.log(newUser);
  };

  return (
    <div className="login-page">
      <h1 className="login-title">FitTrack</h1>
      <div className="input-field">
        <div className="input-icon">
          <PersonIcon />
        </div>
        <input
          className="text-input"
          type="text"
          onChange={(e) =>
            set_newUser({ ...newUser, fullName: e.target.value })
          }
          placeholder="Enter name..."
        ></input>
      </div>
      <div className="input-field">
        <div className="input-icon">
          <PersonIcon />
        </div>
        <input
          className="text-input"
          type="text"
          onChange={(e) =>
            set_newUser({ ...newUser, userName: e.target.value })
          }
          placeholder="Enter username..."
        ></input>
      </div>
      <div className="input-field">
        <div className="input-icon">
          <HeightIcon />
        </div>
        <input
          className="meassurements-input"
          style={{ marginRight: "5px" }}
          type="text"
          placeholder="Enter height..."
          onChange={(e) => set_newUser({ ...newUser, height: e.target.value })}
        ></input>
        <div className="weight-icon">
          <SpeedIcon />
        </div>
        <input
          className="meassurements-input"
          style={{ marginLeft: "5px" }}
          type="text"
          placeholder="Enter weight..."
          onChange={(e) => set_newUser({ ...newUser, weight: e.target.value })}
        ></input>
      </div>
      <div className="input-field">
        <div className="input-icon">
          <LockOpenIcon />
        </div>
        <input
          className="text-input"
          type="password"
          placeholder="Enter password..."
          onChange={(e) =>
            set_newUser({ ...newUser, password: e.target.value })
          }
        ></input>
      </div>
      <div>
        <button onClick={() => onLogin()} className="submit-button">
          Sign up
        </button>
      </div>
      <div className="login-links">
        <div className="link">
          <Link style={{ color: "white", fontSize: "small" }} to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
