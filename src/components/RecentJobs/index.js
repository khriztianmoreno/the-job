/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import jobs from "../../assets/data/jobs.json";

const classNameType = (name) => {
  let className = "";
  switch (name) {
    case "Full time":
      className = "label-success";
      break;
    case "Part time":
      className = "label-warning";
      break;
    case "Freelance":
      className = "label-info";
      break;
    case "Internship":
      className = "label-danger";
      break;
    default:
      className = "label-success";
      break;
  }

  return className;
};

const RecentJobs = () => (
  <section>
    <div className="container">
      <header className="section-header">
        <span>Latest</span>
        <h2>Recent jobs</h2>
      </header>

      <div className="row item-blocks-connected">
        {jobs.map((job) => (
          <div key={job.id} className="col-xs-12">
            <a className="item-block" href="/">
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
            </a>
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

export default RecentJobs;
