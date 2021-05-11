import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from './Header';
import Form from './Form';

import { getJob, registerApplicant } from '../../services/jobs.service';

const ApplyJob = () => {
  const [jobDetail, setJobDetail] = useState(null);
  const { id } = useParams();

  const getJobDetail = async () => {
    const job = await getJob(id);
    setJobDetail(job);
  };

  const updateJobWithApplicant = async saveJob => {
    try {
      await registerApplicant(saveJob);
      alert('Thank you for applying');
    } catch (error) {
      alert('Error');
      throw Error('something went wrong');
    }
  };

  const getApplicant = applicant => {
    const { candidates = [] } = jobDetail;
    const saveApplicant = {
      ...jobDetail,
      candidates: [...candidates, applicant],
    };
    updateJobWithApplicant(saveApplicant);
  };

  useEffect(() => {
    getJobDetail();
  }, [id]);

  return (
    <div>
      {jobDetail ? <Header job={jobDetail} /> : null}

      <Form handleApply={getApplicant} />
    </div>
  );
};

export default ApplyJob;
