import React from "react";
import { Navigate } from "react-router-dom";
import Login from "./Login/Login";
import Header from "./Header/Header";
import Title from "./Title/Title";
import Jobs from "./Jobs/Jobs";
import Job from "./Job/Job";
import Footer from "./Footer/Footer";
import Dropdown from "./Dropdown/Dropdown";
import "../App.css";

const Home = ({ message }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="full_header">
        <Header />
        <Title />
      </div>
      <Dropdown />
      <Jobs />
      <Job />
      <Footer />
    </>
  );
};

export default Home;
