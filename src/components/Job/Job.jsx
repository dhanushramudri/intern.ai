// Job.js
import React from "react";
import "./Job.css";

const Job = ({ job }) => {
  if (!job) {
    return null;
  }

  const {
    company_name,
    job_title,
    city,
    // ... (other properties)
  } = job;

  return (
    <>
      <div className="job_container">
        <div className="header">
          <img src={job.company_logo} alt={`${company_name} Logo`} />
          <div>
            <p>Company: {company_name}</p>
            <p>Location: {city}</p>
            <p>Job Title: {job_title}</p>
            {/* ... (other details) */}
          </div>
        </div>

        {/* ... (other sections) */}

        <div className="requirements">
          <p>Requirements: {job.requirements_summary}</p>
          <p>
            Years of Experience Range: {job.yoe_range.min.$numberInt} -{" "}
            {job.yoe_range.max.$numberInt}
          </p>
        </div>
      </div>
    </>
  );
};

export default Job;
