import React from "react";
import "./Title.css";
const Title = () => {
  return (
    <div className="header_container2">
      <h1 className="header_title">
        <span className="elevate">Elevate</span> Your Internship Quest!
      </h1>
      <h2 className="header_description">
        We use AI to scan{" "}
        <span className="Elevate">
          <span>175,387</span>
        </span>
        tech jobs in real-time directly from company pages. Every company, every
        job, actually hiring on the internet.{" "}
      </h2>
      <div className="header_btn">
        <button className="email_alert_btn" fdprocessedid="0ttu2g">
          <img src="/static/media/mdi_bell.89eec4b8b61b5c6dec6b827f9267d972.svg" />
          Receive E-mail for New Jobs
        </button>
      </div>
    </div>
  );
};

export default Title;
