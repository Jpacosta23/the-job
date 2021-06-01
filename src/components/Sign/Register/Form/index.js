import React, { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { getUsers } from "../../../../services/auth.services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
} from "@fortawesome/fontawesome-free-solid";

import { useAppDispatch } from "../../../../store";
import { registerNewAccount } from "../../../../store/actions";

const FormRegister = () => {
  const dispatch = useAppDispatch();
  const [form, setForm] = useState({});
  const history = useHistory();

  const handleChange = (evt) => {
    evt.preventDefault();
    const { name, value } = evt.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const newUser = { ...form };

    try {
      const users = await getUsers();
      let state = false;
      users.map((user) => {
        if (user.email === newUser.email) {
          state = true;
        }
        return state;
      });

      if (state === true) {
        alert("This email has been already registered");
      } else {
        alert("Account created succesfully");
        await registerNewAccount(newUser, dispatch);
        history.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const validateForm = () => {
    const { name, email, password, role } = form;

    return (
      email &&
      email.length > 0 &&
      password &&
      password.length > 0 &&
      name &&
      name.length > 0 &&
      role
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon">
            <FontAwesomeIcon icon={faUser} size="1x" />
          </span>
          <input
            id="name"
            name="name"
            type="text"
            className="form-control"
            placeholder="Your name"
            required
            onChange={handleChange}
          />
        </div>
      </div>

      <hr className="hr-xs" />

      <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon">
            <FontAwesomeIcon icon={faEnvelope} size="1x" />
          </span>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control"
            placeholder="Email"
            required
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
            id="password"
            name="password"
            type="password"
            className="form-control"
            placeholder="Password"
            required
            onChange={handleChange}
          />
        </div>
      </div>

      <hr className="hr-xs" />

      <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon">
            <FontAwesomeIcon icon={"dice"} size="1x" />
          </span>
          <select
            id="role"
            name="role"
            type="role"
            required
            onChange={handleChange}
          >
            <option selected>candidate</option>
            <option>admin</option>
          </select>
        </div>
      </div>

      <button
        className="btn btn-primary btn-block"
        type="submit"
        disabled={!validateForm}
      >
        Login
      </button>
    </form>
  );
};

FormRegister.propTypes = {
  handleSave: PropTypes.func.isRequired,
};

export default FormRegister;
