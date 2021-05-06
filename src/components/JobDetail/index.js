import React, { useState, useEffect } from "react";
import { getJob } from "../../services/jobs.service";
import { useParams } from "react-router-dom";

const JobDetail = () => {
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
    <section>
      <div className="container">
        <p>{jobDetail ? jobDetail.about : ""}</p>

        <br />
        <h4>Responsibilities</h4>
        <ul>
          {!jobDetail
            ? null
            : jobDetail.responsibilities.map((responsabilitie, index) => {
                return <li key={index}>{responsabilitie}</li>;
              })}
        </ul>

        <br />
        <h4>Minimum qualifications</h4>
        <ul>
          {!jobDetail
            ? null
            : jobDetail.minimumQualifications.map(
                (minimumQualification, index) => {
                  return <li key={index}>{minimumQualification}</li>;
                }
              )}
        </ul>

        <br />
        <h4>Preferred qualifications</h4>
        <ul>
          {!jobDetail
            ? null
            : jobDetail.preferredQualifications.map(
                (preferredQualification, index) => {
                  return <li key={index}>{preferredQualification}</li>;
                }
              )}
        </ul>
      </div>
    </section>
  );
};

export default JobDetail;
