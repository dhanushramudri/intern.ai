import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/signup/Signup";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
