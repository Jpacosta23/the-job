import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Form from "./Form";

import { useAppState, useAppDispatch } from "../../store";
import { getJobDetail, createApplicantToJob } from "../../store/actions";

const ApplyJob = () => {
  const { jobDetail, isLoading } = useAppState();
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const update = async (saveApplicant) => {
    try {
      await createApplicantToJob(saveApplicant, dispatch);
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
    getJobDetail(id, dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      {isLoading ? <p>Loading...</p> : <Header job={jobDetail} />}
      {jobDetail ? <Form handleSubmit={handleApply} /> : null}
    </div>
  );
};

export default ApplyJob;
