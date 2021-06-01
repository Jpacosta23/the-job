import { getJob, updateJob, getAllJobs } from "../services/jobs.service";
import { registerAccount } from "../services/auth.services";

/**
 * Get a single Job
 * @param {Number} id
 * @param {Function} dispatch
 */
const getJobDetail = async (id, dispatch) => {
  dispatch({ type: "IS_LOADING", payload: true });
  try {
    const job = await getJob(id);
    dispatch({ type: "GET_JOB", payload: job });
  } catch (error) {
    dispatch({ type: "SHOW_ERROR", payload: error });
  } finally {
    dispatch({ type: "IS_LOADING", payload: false });
  }
};

/**
 * Create applicant in db-job
 * @param {object} job
 * @param {function} dispatch
 */
const createApplicantToJob = async (job, dispatch) => {
  dispatch({ type: "IS_LOADING", payload: true });
  try {
    const updatedJob = await updateJob(job);
    dispatch({ type: "GET_JOB", payload: updatedJob });
  } catch (error) {
    dispatch({ type: "SHOW_ERROR", payload: error });
  } finally {
    dispatch({ type: "IS_LOADING", payload: false });
  }
};

/**
 * Get all Jobs from db
 * @param {Function} dispatch
 */
const getJobs = async (dispatch) => {
  dispatch({ type: "IS_LOADING", payload: true });
  try {
    const jobs = await getAllJobs();
    dispatch({ type: "GET_ALL_JOBS", payload: jobs });
  } catch (error) {
    dispatch({ type: "SHOW_ERROR", payload: error });
  } finally {
    dispatch({ type: "IS_LOADING", payload: false });
  }
};

/**
 * Create new user into the db
 * @param {Object} user
 * @param {Function} dispatch
 */
const registerNewAccount = async (user, dispatch) => {
  dispatch({ type: "IS_LOADING", payload: true });
  try {
    const newUser = await registerAccount(user);
    delete newUser.password;
    dispatch({ type: "LOGIN", payload: newUser });
    localStorage.setItem("THE_JOB_APP", JSON.stringify(newUser));
  } catch (error) {
    dispatch({ type: "SHOW_ERROR", payload: error });
  } finally {
    dispatch({ type: "IS_LOADING", payload: false });
  }
};

export { getJobDetail, createApplicantToJob, getJobs, registerNewAccount };
