import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const JobDescription = props => {
  const { job } = props;

  return (
    <div className="container">
      <div className="header-detail">
        <img className="logo" src={job.image} alt={`${job.company} logo`} />
        <div className="hgroup">
          <h1>{job.title}</h1>
          <h3>
            <a href="/">{job.company}</a>
          </h3>
        </div>
        <time>{job.ago}</time>
        <hr />
        <p className="lead">{job.about}</p>

        <ul className="details cols-3">
          <li>
            <i className="fa fa-map-marker" />
            <span>{job.location}</span>
          </li>

          <li>
            <i className="fa fa-briefcase" />
            <span>{job.type}</span>
          </li>

          <li>
            <i className="fa fa-money" />
            <span>{job.salary}</span>
          </li>

          <li>
            <i className="fa fa-clock-o" />
            <span>{job.hours}</span>
          </li>

          <li>
            <i className="fa fa-flask" />
            <span>{job.expirence}</span>
          </li>

          <li>
            <i className="fa fa-certificate" />
            <a href="/">{job.certificate}</a>
          </li>
        </ul>

        <div className="button-group">
          <ul className="social-icons">
            <li className="title">Share on</li>
            <li>
              <a className="facebook" href="/">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a className="google-plus" href="/">
                <i className="fa fa-google-plus" />
              </a>
            </li>
            <li>
              <a className="twitter" href="/">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a className="linkedin" href="/">
                <i className="fa fa-linkedin" />
              </a>
            </li>
          </ul>

          <div className="action-buttons">
            <Link className="btn btn-primary" to="/">
              Apply with linkedin
            </Link>
            <Link className="btn btn-success" to={`/jobs/apply/${job.id}`}>
              Apply now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

JobDescription.propTypes = {
  job: PropTypes.shape(),
};

JobDescription.defaultProps = {
  job: {},
};

export default JobDescription;
