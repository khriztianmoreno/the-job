import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import jobs from "../../../assets/data/jobs.json";

const JobDescription = () => {
  const { id } = useParams();
  let [job, setJob] = useState([]);

  const getJob = () => {
    const selectedJob = jobs.find((item) => item.id === id);
    setJob(selectedJob);
  };

  useEffect(() => {
    getJob();
  }, [id]);

  return (
    <div className="container">
      <div className="header-detail">
        <img className="logo" src={job.image} alt={job.company} />
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
            <span>{job.experience}</span>
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
            <Link className="btn btn-success" to="/jobs/apply/1020">
              Apply now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
