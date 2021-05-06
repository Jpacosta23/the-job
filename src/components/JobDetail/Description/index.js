import React, { useState, useEffect } from "react";
import { getJob } from "../../../services/jobs.service";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const JobDescription = () => {
  const { id } = useParams();
  console.log(id);

  const [jobDetail, setJobDetail] = useState(null);

  const getJobDetail = async () => {
    const job = await getJob(id);
    setJobDetail(job);
    console.log(job.responsibilities);
  };

  useEffect(() => {
    getJobDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <div className="container">
      {jobDetail ? (
        <div className="header-detail">
          <img className="logo" src={jobDetail.image} alt="google Logo" />
          <div className="hgroup">
            <h1>{jobDetail.title}</h1>
            <h3>
              <a href={`https://www.${jobDetail.company}.com/`}>
                {jobDetail.company}
              </a>
            </h3>
          </div>
          <time>{jobDetail.ago}</time>
          <hr />
          <p className="lead">{jobDetail.about}</p>

          <ul className="details cols-3">
            <li>
              <i className="fa fa-map-marker" />
              <span>{jobDetail.location}</span>
            </li>

            <li>
              <i className="fa fa-briefcase" />
              <span>{jobDetail.type}</span>
            </li>

            <li>
              <i className="fa fa-money" />
              <span>{jobDetail.salary}</span>
            </li>

            <li>
              <i className="fa fa-clock-o" />
              <span>{jobDetail.hours}</span>
            </li>

            <li>
              <i className="fa fa-flask" />
              <span>{jobDetail.experience}</span>
            </li>

            <li>
              <i className="fa fa-certificate" />
              <a href="/">{jobDetail.certificate}</a>
            </li>
          </ul>

          <div className="button-group">
            <ul className="social-icons">
              <li className="title">Share on</li>
              <li>
                <a className="facebook" href="/">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a className="google-plus" href="/">
                  <i className="fa fa-google-plus" />
                </a>
              </li>
              <li>
                <a className="twitter" href="/">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a className="linkedin" href="/">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
            </ul>

            <div className="action-buttons">
              <Link className="btn btn-primary" to="/">
                Apply with linkedin
              </Link>
              <Link className="btn btn-success" to="/jobs/apply/1020">
                Apply now
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default JobDescription;
