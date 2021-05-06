import React from 'react';
import PropTypes from 'prop-types';

const JobDetail = props => {
  const { job } = props;

  return (
    <section>
      <div className="container">
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse urna nibh, viverra non.
        </p>

        <br />
        <h4>Responsibilities</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          Suspendisse urna nibh, viverra non.
        </p>
        <ul>
          {job.responsibilities.length
            ? job.responsibilities.map((r, idx) => (
                <li key={`r-${idx}`}>{r}</li>
              ))
            : null}
        </ul>

        <br />
        <h4>Minimum qualifications</h4>
        <ul>
          {job.minimumQualifications.length
            ? job.minimumQualifications.map((mQual, idx) => (
                <li key={`mQual-${idx}`}>{mQual}</li>
              ))
            : null}
        </ul>

        <br />
        <h4>Preferred qualifications</h4>
        <ul>
          {job.preferredQualifications.length
            ? job.preferredQualifications.map((pQual, idx) => (
                <li key={`pQual-${idx}`}>{pQual}</li>
              ))
            : null}
        </ul>
      </div>
    </section>
  );
};

JobDetail.propTypes = {
  job: PropTypes.shape(),
};

JobDetail.defaultProps = {
  job: {},
};

export default JobDetail;
