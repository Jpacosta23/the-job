const API_URL_BASE = process.env.REACT_APP_API_URL || "";

const getAllJobs = async () => {
  try {
    const RES = await fetch`${API_URL_BASE}/api/jobs`;
    const data = await RES.json();

    return data;
  } catch (err) {
    throw Error("something went wrong");
  }
};

const getJob = async (id) => {
  try {
    const RES = await fetch`${API_URL_BASE}/api/jobs/${id}`;
    const data = await RES.json();

    return data;
  } catch (err) {
    throw Error("something went wrong");
  }
};

const createJob = async (job) => {
  try {
    const payload = {
      method: "POST",
      body: JSON.stringify(job),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(`${API_URL_BASE}/api/jobs`, payload);
    const newJob = await response.json();

    return newJob;
  } catch (err) {
    throw Error("OHHPS");
  }
};

export { getAllJobs, getJob, createJob };
