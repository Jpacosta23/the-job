import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/fontawesome-free-solid";
import { signIn } from "../../../store/actions";
import { useAppDispatch } from "../../../store";

const Login = () => {
  const [user, setUser] = useState({});
  const dispatch = useAppDispatch();
  const history = useHistory();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      await signIn(user, dispatch);
      history.push("/");
    } catch (error) {
      throw Error(error);
    }
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <div className="login-page">
      <main>
        <div className="login-block">
          <img src="./img/logo.png" alt="Logo" />
          <h1>Log into your account</h1>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <FontAwesomeIcon icon={faEnvelope} size="1x" />
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                />
              </div>
            </div>

            <hr className="hr-xs" />

            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <FontAwesomeIcon icon={faLock} size="1x" />
                </span>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>
            </div>

            <button className="btn btn-primary btn-block" type="submit">
              Login
            </button>
          </form>
        </div>

        <div className="login-links">
          <Link to="/" className="pull-left">
            Forget Password?
          </Link>
          <Link to="/register" className="pull-right">
            Register an account
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Login;
