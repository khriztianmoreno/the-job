import React from 'react';
import { Link } from 'react-router-dom';

import Form from './../../../components/Sign/Register/Form';

const Register = () => {
  return (
    <div className="login-page">
      <main>
        <div className="login-block">
          <img src="./img/logo.png" alt="Logo" />
          <h1>Log into your account</h1>

          <Form />
        </div>

        <div className="login-links">
          <p className="text-center">
            Already have an account?{' '}
            <Link to="/login" className="txt-brand">
              Login
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Register;
