import "./Login.scss";

import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import Link from "react-router-dom/Link";

export default function Login() {
  return (
    <div className="login-page">
      <h1 className="login-title">Fittrack</h1>
      <div className="input-field">
        <div className="input-icon">
          <PersonIcon />
        </div>
        <input
          className="text-input"
          type="text"
          placeholder="Enter username..."
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
        ></input>
      </div>
      <div>
        <button className="submit-button">Login</button>
      </div>
      <div className="login-links">
        <div className="link">
          <Link
            style={{ color: "white", fontSize: "small" }}
            to="/changepassword"
          >
            Change password
          </Link>
        </div>
        <div className="link">
          <Link style={{ color: "white", fontSize: "small" }} to="/signup">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
