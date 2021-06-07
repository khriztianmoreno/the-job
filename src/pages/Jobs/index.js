import React, { useEffect } from 'react';

import Navigation from './../../components/Navigation';
import BrowseJobs from './../../components/BrowseJobs';
import JobItem from './../../components/JobItem';
import Pagination from './../../components/Pagination';
import Footer from './../../components/Footer';

import { getJobs } from '../../context/actions';
import { useAppState, useAppDispatch } from '../../context/store';

const JobsList = () => {
  const dispatch = useAppDispatch();
  const { jobs } = useAppState();

  useEffect(() => {
    if (!jobs.length) {
      getJobs(dispatch);
    }
  }, []);

  return (
    <div className="nav-on-header smart-nav bg-alt">
      <Navigation />

      <BrowseJobs />

      <main>
        <section className="no-padding-top">
          <div className="container">
            <div className="row">
              {jobs.map(job => (
                <JobItem key={job._id} job={job} />
              ))}
            </div>
            <Pagination />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default JobsList;
