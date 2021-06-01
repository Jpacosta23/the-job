import React from "react";
import { Link } from "react-router-dom";

const Header = ({ job }) => {
  return (
    <header
      className="page-header bg-img size-lg"
      style={{ backgroundImage: "url(/img/bg-banner1.jpg)" }}
    >
      <div className="container no-shadow">
        <h1 className="text-center">Apply for the job</h1>
        <p className="lead text-center">
          Apply with your online resume, create new resume for the job, or make
          a custom application.
        </p>

        <hr />
        <Link
          className="item-block item-block-flat"
          to={`/jobs/detail/${job.id}`}
        >
          <header>
            <img src={job.image} alt="Logo" />
            <div className="hgroup">
              <h4>{job.title}</h4>
              <h5>{job.company}</h5>
            </div>
            <div className="header-meta">
              <span className="location">{job.location}</span>
              <time>{job.ago}</time>
            </div>
          </header>
        </Link>

        <div className="button-group">
          <div className="action-buttons">
            <button
              className="btn btn-primary"
              onClick={() => {
                document
                  .getElementById("sec-custom")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Apply now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
