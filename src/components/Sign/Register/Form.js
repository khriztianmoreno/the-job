import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLock,
  faUser,
} from '@fortawesome/fontawesome-free-solid';

import useForm from '../../../hooks/useForm';
import { registerAccount } from '../../../services/auth.services';

const FormRegister = () => {
  const { form, handleChange } = useForm({});
  const history = useHistory();

  const handleSubmit = async evt => {
    evt.preventDefault();

    const newUser = {
      ...form,
      role: 'candidate',
    };

    try {
      const userRegistered = await registerAccount(newUser);

      delete userRegistered.password;

      // KEY localstorage : MyApp
      localStorage.setItem('THE_JOB_APP', JSON.stringify(userRegistered));
      // Redirect to home
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  const validateForm = () => {
    const { name, email, password } = form;

    return (
      email &&
      email.length > 0 &&
      password &&
      password.length >= 4 &&
      name &&
      name.length > 0
    );
  };

  useEffect(() => {
    const localUser = localStorage.getItem('THE_JOB_APP');
    let timer;

    if (localUser) {
      timer = setTimeout(() => {
        history.push('/');
      }, 2000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, []);

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
            onChange={handleChange}
            required
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
            name="email"
            className="form-control"
            placeholder="Email"
            onChange={handleChange}
            required
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
            name="password"
            className="form-control"
            placeholder="Password"
            minLength={4}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <button
        className="btn btn-primary btn-block"
        type="submit"
        disabled={!validateForm()}
      >
        Registered
      </button>
    </form>
  );
};

export default FormRegister;
