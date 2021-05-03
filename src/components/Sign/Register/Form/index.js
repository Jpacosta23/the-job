import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
} from "@fortawesome/fontawesome-free-solid";

const FormRegister = () => {
  const [form, setForm] = useState({});

  const handleChange = (evt) => {
    evt.preventDefault();
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const validateForm = () => {
    const { name, email, password } = form;

    return (
      email &&
      email.length > 0 &&
      password &&
      password.length > 0 &&
      name &&
      name.length > 0
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
            type="password"
            className="form-control"
            placeholder="Password"
            required
            onChange={handleChange}
          />
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
