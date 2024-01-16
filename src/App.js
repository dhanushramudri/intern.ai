import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/signup/Signup";
import Login from "./components/Login/Login";
import CursorCircle from "./CursorCircle";

function App() {
  return (
    <>
      {/* <CursorCircle /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
