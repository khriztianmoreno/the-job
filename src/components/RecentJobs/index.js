import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getJobs } from '../../context/actions';
import { useAppState, useAppDispatch } from '../../context/store';

const classNameType = name => {
  let className = '';
  switch (name) {
    case 'full time':
      className = 'label-success';
      break;
    case 'part time':
      className = 'label-warning';
      break;
    case 'freelance':
      className = 'label-info';
      break;
    case 'internship':
      className = 'label-danger';
      break;
    default:
      className = 'label-success';
      break;
  }

  return className;
};

const RecentJobs = () => {
  const dispatch = useAppDispatch();
  const { jobs } = useAppState();

  useEffect(() => {
    getJobs(dispatch);
  }, []);

  return (
    <section>
      <div className="container">
        <header className="section-header">
          <span>Latest</span>
          <h2>Recent jobs</h2>
        </header>

        <div className="row item-blocks-connected">
          {jobs.map(job => (
            <div key={job._id} className="col-xs-12">
              <Link className="item-block" to={`/jobs/detail/${job._id}`}>
                <header>
                  <img src={job.image} alt={job.title} />
                  <div className="hgroup">
                    <h4>{job.title} </h4>
                    <h5>{job.company} </h5>
                  </div>
                  <div className="header-meta">
                    <span className="location">{job.location}</span>
                    <span className={`label ${classNameType(job.type)}`}>
                      {job.type}
                    </span>
                  </div>
                </header>
              </Link>
            </div>
          ))}
        </div>

        <br />
        <br />
        <p className="text-center">
          <Link className="btn btn-info" to="/jobs">
            Browse all jobs
          </Link>
        </p>
      </div>
    </section>
  );
};

export default RecentJobs;
