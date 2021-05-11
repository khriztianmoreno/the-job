import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from './Header';
import Form from './Form';

import { getJobDetail, createApplicantToJob } from '../../context/actions';
import { useAppState, useAppDispatch } from '../../context/store';

const ApplyJob = () => {
  const dispatch = useAppDispatch();
  const { jobDetail } = useAppState();
  const { id } = useParams();

  const updateJobWithApplicant = async saveJob => {
    try {
      await createApplicantToJob(dispatch, saveJob);
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
    getJobDetail(dispatch, id);
  }, [id]);

  return (
    <div>
      {jobDetail ? <Header job={jobDetail} /> : null}

      <Form handleApply={getApplicant} />
    </div>
  );
};

export default ApplyJob;
