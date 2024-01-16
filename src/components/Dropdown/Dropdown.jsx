import React from "react";
import "./Dropdown.css";

const Dropdown = () => {
  return (
    <div className="dropdown_container">
      <div className="row1">
        <div>Job Title</div>
        <div>Keywords</div>
        <div>Location Type</div>
        <div>Location</div>
      </div>
      <div className="row2">
        <div>Advanced Search</div>
        <div className="text">100,000 Internships found at 10k+ companies</div>
        <div>Relevance & Date</div>
      </div>
    </div>
  );
};

export default Dropdown;
