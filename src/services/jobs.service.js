const getAllJobs = async () => {
  try {
    const resp = await fetch('http://localhost:3004/api/jobs');
    const jobs = await resp.json();

    return jobs;
  } catch (error) {
    throw Error('Ohhps');
  }
};

const getJob = async id => {
  try {
    const resp = await fetch(`http://localhost:3004/api/jobs/${id}`);
    const job = await resp.json();

    return job;
  } catch (error) {
    throw Error('Ohhps');
  }
};

const createJob = job => {
  return job;
};

export { getAllJobs, getJob, createJob };
