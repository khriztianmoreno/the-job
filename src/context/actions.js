import { SET_LOADING, GET_JOB } from './constant';
import { getJob, registerApplicant } from '../services/jobs.service';

export async function getJobDetail(dispatch, id) {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const job = await getJob(id);
    dispatch({ type: GET_JOB, payload: job });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
}

export async function createApplicantToJob(dispatch, job) {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const createdJob = await registerApplicant(job);
    dispatch({ type: GET_JOB, payload: createdJob });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
}
