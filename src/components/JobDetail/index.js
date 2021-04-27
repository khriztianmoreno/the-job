import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import jobs from "../../assets/data/jobs.json";

const JobDetail = () => {
  const { id } = useParams();
  let [job, setJob] = useState({
    responsibilities: [],
    minimumQualifications: [],
    preferredQualifications: [],
  });
  console.log(job);
  const getJob = () => {
    const selectedJob = jobs.find((item) => item.id === id);
    setJob(selectedJob);
  };

  useEffect(() => {
    getJob();
  }, [id]);

  return (
    <section>
      <div className="container">
        <p>{job.summary}</p>

        <br />
        <h4>Responsibilities</h4>
        <p>
          The responsabilityes of this job are:
          <br />
          <ul>
            {job.responsibilities.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </p>

        <br />
        <h4>Minimum qualifications</h4>
        <ul>
          {job.minimumQualifications.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>

        <br />
        <h4>Preferred qualifications</h4>
        <ul>
          {job.preferredQualifications.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </section>
  );
};

export default JobDetail;
