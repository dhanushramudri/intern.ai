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
          className="job-item"
          style={{ textDecoration: "none" }}
        >
          <div className="location-details-container">
            <div
              style={{
                display: "flex",
                maxWidth: "250px",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
                flexDirection: "column",
                marginRight: "80px",
              }}
            >
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
            {/* <div
              style={{
                width: "40px",
                height: "40px",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                id="bookmark-loading-0"
                style={{ position: "absolute", zIndex: "2", display: "none" }}
              ></div>
              <img
                id="bookmark-0"
                src="/static/media/bookmark.8cbad6c7129163634b34d2387e1f42bb.svg"
                alt="bookmark"
              />
            </div> */}
          </div>
          <div className="company-logo-container">
            <img
              loading="lazy"
              src="https://workablehr.s3.amazonaws.com/uploads/account/logo/508165/logo"
              alt="ConnectOS"
              className="company-logo"
            />
          </div>
          <div className="content-container">
            <div className="job-title">
              Dental Patient Coordinator (AU Dental, Office-based)
            </div>
            <div className="company-details-1">
              <div className="company-name item" style={{ display: "flex" }}>
                ConnectOS<div className="hiring-badge"></div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "1rem",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}></div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h1
                  style={{
                    fontSize: "18px",
                    maxWidth: "100%",
                    width: "100%",
                    color: "black",
                  }}
                >
                  🎯 Requirements
                </h1>
                <p
                  className="requirements_text"
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    lineHeight: "1.5",
                    color: "rgb(170, 170, 170)",
                  }}
                >
                  2+ years admin/coordinator experience. Strong communication
                  via phone/email. Good computer skills, including database and
                  scheduling
                </p>
              </div>
            </div>
            <div className="more-details-1">
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
            <div className="job-details">
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
