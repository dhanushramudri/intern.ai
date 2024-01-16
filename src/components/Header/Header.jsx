import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header_container">
        <div className="logo">
          Intern <span>.ai</span>
          <div className="beta">beta</div>
        </div>
        <div className="header_items">
          <div>About</div>
          <div>Blog</div>
          <div>🚀Promote Internship</div>
          <div>Account</div>
          <div>Log Out</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
