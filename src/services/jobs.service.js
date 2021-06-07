const API_URL_BASE = process.env.REACT_APP_API_URL || '';

const getAllJobs = async () => {
  try {
    const resp = await fetch(`${API_URL_BASE}/api/jobs`);
    const jobs = await resp.json();

    return jobs;
  } catch (error) {
    throw Error('Ohhps');
  }
};

const getJob = async id => {
  try {
    const resp = await fetch(`${API_URL_BASE}/api/jobs/${id}`);
    const job = await resp.json();

    if (job && job._id) {
      return job;
    }

    return null;
  } catch (error) {
    throw Error('Ohhps');
  }
};

/**
 * Register an applicant for a job
 * @param {Object} job
 * @returns
 */
const registerApplicant = async job => {
  try {
    const payload = {
      method: 'PUT',
      body: JSON.stringify(job),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(`${API_URL_BASE}/api/jobs/${job.id}`, payload);
    const newJob = await response.json();

    return newJob;
  } catch (err) {
    throw Error(err);
  }
};

const createJob = job => {
  return job;
};

export { getAllJobs, getJob, createJob, registerApplicant };
