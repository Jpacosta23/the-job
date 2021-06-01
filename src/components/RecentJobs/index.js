/* eslint-disable */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import JobItem from "./../../components/JobItem";

import { useAppState, useAppDispatch } from "../../store";
import { getJobs } from "../../store/actions";

const RecentJobs = () => {
  const { jobs } = useAppState();
  const dispatch = useAppDispatch();

  useEffect(async () => {
    getJobs(dispatch);
  }, []);

  return (
    <section>
      <div className="container">
        <header className="section-header">
          <span>Latest</span>
          <h2>Recent jobs</h2>
        </header>

        <div className="row item-blocks-connected">
          {!jobs.length
            ? "loading..."
            : jobs.map((job) => <JobItem key={job.id} job={job} />)}
        </div>

        <br />
        <br />
        <p className="text-center">
          <Link className="btn btn-info" to="/jobs">
            Browse all jobs
          </Link>
        </p>
      </div>
    </section>
  );
};

export default RecentJobs;
