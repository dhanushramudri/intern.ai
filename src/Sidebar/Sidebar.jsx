import React, { useContext, useEffect, useState } from "react";
import "./Sidebar.css";
import { useNavigate } from "react-router";

export default function Sidebar() {
  const navigate = useNavigate();
  const [session, setSession] = useState(null);

  function logout() {
    function deleteCookie() {
      document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
      setSession(null);
      navigate("/search");
    }
    deleteCookie();
  }

  function close() {
    if (document.getElementById("sidebar-container").style.display === "none") {
      document.getElementById("sidebar-container").style.display = "block";
    } else {
      document.getElementById("sidebar-container").style.display = "none";
    }
    document.getElementById("menu_bar-1").classList.toggle("open-1");
    document.getElementById("menu_bar-2").classList.toggle("open-2");
    document.getElementById("menu_bar-3").classList.toggle("open-3");
    document.getElementById("sidebar-container").style.display = "none";
  }
  return (
    <div
      id="sidebar-container"
      style={{
        position: "fixed",
        width: "100%",
        top: "0%",
        bottom: "0%",
        height: "100vh",
        display: "none",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 5,
      }}
    >
      <div className="model-container-1" onClick={() => close()}></div>
      <div className="sidebar-container">
        <div className="sidebar-items">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className="sidebar-header">logo</div>
          </div>
          <div
            className="sidebar-item"
            onClick={() => {
              close();
              navigate("/search");
            }}
          >
            Search Jobs
          </div>
          <div
            className="sidebar-item"
            onClick={() => {
              close();
              navigate("/account");
            }}
          >
            Account
          </div>
          <div
            className="sidebar-item"
            onClick={() => {
              close();
              navigate("/advice");
            }}
          >
            Advice
          </div>
          <div
            className="sidebar-item"
            onClick={() => {
              close();
              navigate("/promote-job");
            }}
          >
            Promote Job
          </div>
          <div
            className="sidebar-item"
            onClick={() => {
              close();
              navigate("/wishlist");
            }}
          >
            Wishlist
          </div>
          {!session ? (
            <div
              className="sidebar-item"
              onClick={() => {
                close();
                navigate("/login");
              }}
            >
              Log In
            </div>
          ) : (
            <div
              className="sidebar-item"
              onClick={async () => {
                logout();
                close();
              }}
            >
              Log Out
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
