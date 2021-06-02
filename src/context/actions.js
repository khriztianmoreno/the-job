import { SET_LOADING, GET_JOB, GET_ALL_JOBS, REGISTER_USER } from './constant';
import {
  getAllJobs,
  getJob,
  registerApplicant,
} from '../services/jobs.service';
import { registerAccount } from '../services/auth.services';

export async function getJobs(dispatch) {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const jobs = await getAllJobs();
    dispatch({ type: GET_ALL_JOBS, payload: jobs });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
}

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

/**
 * Create a new user
 * @param {Function} dispatch
 * @param {Object} user
 */
export async function registerNewAccount(dispatch, user) {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const { profile, token } = await registerAccount(user);

    dispatch({ type: REGISTER_USER, payload: profile });
    localStorage.setItem('THE_JOB_APP', JSON.stringify(token));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
}
