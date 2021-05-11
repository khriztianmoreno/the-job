import React from 'react';
import PropTypes from 'prop-types';

import useForm from '../../../hooks/useForm';

const Form = props => {
  const localUser = localStorage.getItem('THE_JOB_APP');
  const user = localUser ? JSON.parse(localUser) : null;
  const { handleApply } = props;
  const { form, handleChange } = useForm(user);

  const handleSubmit = evt => {
    evt.preventDefault();
    handleApply(form);
  };

  return (
    <main>
      <section id="sec-custom">
        <div className="container">
          <header className="section-header">
            <span>Custom application</span>
            <h2>Apply now</h2>
            <p>Apply for this job with a custom application.</p>
          </header>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="form-group col-xs-12 col-md-6">
                <input
                  type="text"
                  className="form-control input-lg"
                  placeholder="Name"
                  required
                  defaultValue={user ? user.name : ''}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group col-xs-12 col-md-6">
                <input
                  type="email"
                  className="form-control input-lg"
                  placeholder="Email"
                  required
                  defaultValue={user ? user.email : ''}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <textarea
                className="form-control"
                rows="5"
                placeholder="Message"
                name="message"
                onChange={handleChange}
              />
            </div>

            <div className="form-group" />

            <div className="row">
              <div className="col-xs-6 col-md-3">
                <div className="upload-button upload-button-block">
                  <button className="btn btn-block btn-success">
                    Attach your CV
                  </button>
                  <input name="cv" type="file" />
                </div>
              </div>

              <div className="col-xs-6 col-md-3">
                <button type="submit" className="btn btn-block btn-primary">
                  Submit application
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

Form.propTypes = {
  handleApply: PropTypes.func.isRequired,
};

export default Form;
