import React from "react";
import "./Header.css";

const Header = () => {
  function sidebar_operation() {
    var sidebar = document.getElementById("sidebar");
    var menuBar = document.getElementById("menu-bar");

    if (sidebar.style.display === "none" || sidebar.style.display === "") {
      sidebar.style.display = "block";
      menuBar.style.position = "fixed";
    } else {
      sidebar.style.display = "none";
      menuBar.style.position = "absolute";
    }

    document.getElementById("menu_bar-1").classList.toggle("open-1");
    document.getElementById("menu_bar-2").classList.toggle("open-2");
    document.getElementById("menu_bar-3").classList.toggle("open-3");
  }
  const LogoutHandler = () => {
    localStorage.removeItem("token");
    console.log("User logged out");
    window.location.reload();
  };

  return (
    <div className="header">
      {/* Medium screen  header */}
      <div className="medium_header">
        <div className="medium_screen_logo">
          Intern <span>.ai</span>
          <div className="beta">beta</div>
        </div>
        <div class="menu-bar" id="menu-bar" onClick={() => sidebar_operation()}>
          <div id="menu_bar-1" class="line2"></div>
          <div id="menu_bar-2" class="line2"></div>
          <div id="menu_bar-3" class="line3"></div>
        </div>
        <div className="sidebar" id="sidebar"></div>
      </div>

      {/* Larger screen Header */}

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
          <div onClick={LogoutHandler}>Log Out</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
