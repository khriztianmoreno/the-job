import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Navigation from './../../../components/Navigation';
import Header from './../../../components/Header';
import JobDetail from './../../../components/JobDetail';
import Description from './../../../components/JobDetail/Description';
import Footer from './../../../components/Footer';

import { getJobDetail } from '../../../context/actions';
import { useAppState, useAppDispatch } from '../../../context/store';

const DetailJob = () => {
  const dispatch = useAppDispatch();
  const { jobDetail: jobData } = useAppState();
  const { id } = useParams();

  useEffect(() => {
    getJobDetail(dispatch, id);
  }, [id]);

  return (
    <div className="nav-on-header smart-nav bg-alt">
      <Navigation />

      <Header
        className="page-header bg-img size-lg"
        backgroundImage="url(/img/bg-banner2.jpg)"
      >
        {jobData ? <Description job={jobData} /> : null}
      </Header>

      <main>{jobData ? <JobDetail job={jobData} /> : null}</main>

      <Footer />
    </div>
  );
};

export default DetailJob;
