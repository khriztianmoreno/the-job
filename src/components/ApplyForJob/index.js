import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from './Header';
import Form from './Form';

import { getJob } from '../../services/jobs.service';

const ApplyJob = () => {
  const [jobDetail, setJobDetail] = useState(null);
  const { id } = useParams();

  const getJobDetail = async () => {
    const job = await getJob(id);
    setJobDetail(job);
  };

  useEffect(() => {
    getJobDetail();
  }, [id]);

  return (
    <div>
      {jobDetail ? <Header job={jobDetail} /> : null}

      <Form />
    </div>
  );
};

export default ApplyJob;
