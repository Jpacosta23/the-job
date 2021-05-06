import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Form = ({ handleSubmit }) => {
  const localUser = JSON.parse(localStorage.getItem("THE_JOB_APP"));
  const user = localUser ? localUser : null;
  const [applicant, setApplicant] = useState(user);
  const history = useHistory();

  const handleApplication = (evt) => {
    evt.preventDefault();
    if (user) {
      handleSubmit(applicant);
    } else {
      alert("Ohps first you have to login");
      history.push("/login");
    }
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    const newApplicant = { ...applicant, [name]: value };
    console.log(newApplicant);
    setApplicant(newApplicant);
  };

  return (
    <main>
      <section id="sec-custom">
        <div className="container">
          <header className="section-header">
            <span>Custom application</span>
            <h2>Apply now</h2>
            <p>Apply for this job with a custom application.</p>
          </header>

          <form onSubmit={handleApplication}>
            <div className="row">
              <div className="form-group col-xs-12 col-md-6">
                <input
                  type="text"
                  className="form-control input-lg"
                  placeholder="Name"
                  name="name"
                  defaultValue={user ? user.name : ""}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group col-xs-12 col-md-6">
                <input
                  type="email"
                  className="form-control input-lg"
                  placeholder="Email"
                  name="email"
                  defaultValue={user ? user.email : ""}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <textarea
                className="form-control"
                rows="5"
                placeholder="Message"
              />
            </div>

            <div className="form-group" />

            <div className="row">
              <div className="col-xs-6 col-md-3">
                <div className="upload-button upload-button-block">
                  <button className="btn btn-block btn-success">
                    Attach your CV
                  </button>
                  <input name="cv" type="file" />
                </div>
              </div>

              <div className="col-xs-6 col-md-3">
                <button type="submit" className="btn btn-block btn-primary">
                  Submit application
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Form;
