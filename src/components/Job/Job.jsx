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
    requirements_summary,
    // ... (other properties)
  } = job;

  return (
    <>
      <div className="job_container">
        <a
          // href="/job/65a7724e63112870832be12a"
          id="job-65a7724e63112870832be12a"
          className="main_job_container"
          style={{}}
        >
          <div className="location_container">
            <div className="location_sub_container">
              <div style={{ color: "black" }}>📍 Philippines</div>
              <div
                style={{
                  marginTop: "6px",
                  maxWidth: "200px",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  color: "black",
                }}
              >
                Mandaluyong, Metro Manila, Philippines
              </div>
              <div id="job-date-0" className="date-posted">
                today
              </div>
            </div>
          </div>
          <div className="company_logo_container">
            <img
              loading="lazy"
              src="https://workablehr.s3.amazonaws.com/uploads/account/logo/508165/logo"
              alt="ConnectOS"
              className="company-logo"
            />
          </div>
          <div className="data_container">
            <div className="job_title">
              Dental Patient Coordinator (AU Dental, Office-based)
            </div>
            <div className="company_title_container">
              <div className="company-name item" style={{ display: "flex" }}>
                ConnectOS<div className="hiring-badge"></div>
              </div>
            </div>
            <div className="job_requirements_container">
              {/* <div style={{ display: "flex", flexDirection: "column" }}></div> */}
              <div className="job_requirements_subcontainer">
                <h1>🎯 Requirements</h1>
                <p className="job_requirements_text">
                  2+ years admin/coordinator experience. Strong communication
                  via phone/email. Good computer skills, including database and
                  scheduling
                </p>
              </div>
            </div>
            <div className="job_related">
              <div id="more-details-1-0" className="item">
                Apply
              </div>
              <div id="more-details-2-0" className="item">
                All Job Openings
              </div>
              <div id="more-details-3-0" className="item">
                Website
              </div>
            </div>
            <div className="job_details">
              <div className="item">💰 480,000 PHP</div>
              <div className="item">🛢️ Workable</div>
              <div className="item">⏰ Full Time</div>
              <div className="item">💼 In-Person</div>
              <div className="item">🟢 Entry level (2 Years)</div>
            </div>
            <div className="category">
              <div className="item">🩺 Healthcare Services Jobs</div>
              <div className="item">📋 Administrative Jobs</div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default Job;
