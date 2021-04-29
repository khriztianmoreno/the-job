import React, { Component, useState } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
} from "@fortawesome/fontawesome-free-solid";

/* class FormRegister extends Component {
  constructor() {
    super();

    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.id]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.handleSave(this.state);
  }

  validateForm() {
    const { name, email, password } = this.state;

    return (
      email &&
      email.length > 0 &&
      password &&
      password.length > 0 &&
      name &&
      name.length > 0
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
            />
          </div>
        </div>

        <button
          className="btn btn-primary btn-block"
          type="submit"
          disabled={!this.validateForm()}
        >
          Login
        </button>
      </form>
    );
  }
} */

const FormRegister = () => {
  const [state, setState] = useState({});

  const handleChange = (evt) => {
    setState({
      [evt.target.id]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.handleSave(state);
  };

  const validateForm = () => {
    const { name, email, password } = state;

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
        disabled={!validateForm()}
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
