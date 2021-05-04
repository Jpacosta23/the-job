/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import jobs from "./../../assets/data/jobs.json";
import JobItem from "./../../components/JobItem";
import { getAllJobs } from "../../services/jobs.service";

const RecentJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(async () => {
    const data = await getAllJobs();
    setJobs(data);
  }, []);
  console.log("hola", jobs);
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
