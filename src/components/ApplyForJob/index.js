import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getJob, updateJob } from "../../services/jobs.service";
import Header from "./Header";
import Form from "./Form";

const ApplyJob = () => {
  const [jobDetail, setJobDetail] = useState(null);
  const { id } = useParams();

  const getJobDetail = async () => {
    const job = await getJob(id);
    setJobDetail(job);
  };

  const update = async (saveApplicant) => {
    try {
      await updateJob(saveApplicant);
      alert("Thank you for applying");
    } catch (error) {
      alert("Error");
      throw Error("something went wrong");
    }
  };

  const handleApply = async (applicant) => {
    console.log(applicant);
    const { candidates = [] } = jobDetail;
    const saveApplicant = {
      ...jobDetail,
      candidates: [...candidates, applicant],
    };
    update(saveApplicant);
  };

  useEffect(() => {
    getJobDetail();
    console.log(jobDetail);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      {!jobDetail ? null : <Header job={jobDetail} />}
      {jobDetail ? <Form handleSubmit={handleApply} /> : null}
    </div>
  );
};

export default ApplyJob;
