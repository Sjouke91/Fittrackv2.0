import "./Login.scss";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PersonIcon from "@material-ui/icons/Person";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../store/auth/actions";
import { selectToken } from "../../store/auth/selectors";

export default function Login() {
  const [user, set_user] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token !== null) {
      history.push("/workoutlist");
    }
  }, [token, history]);

  const onLogin = () => {
    dispatch(login(user.email, user.password));
  };

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
          onChange={(e) => set_user({ ...user, email: e.target.value })}
          placeholder="Enter e-mail..."
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
          onChange={(e) => set_user({ ...user, password: e.target.value })}
        ></input>
      </div>
      <div>
        <button onClick={() => onLogin()} className="submit-button">
          Login
        </button>
      </div>
      <div className="login-links">
        <div className="link">
          <Link style={{ color: "white", fontSize: "small" }} to="/login">
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
