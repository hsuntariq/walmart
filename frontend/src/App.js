import React from "react";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Authentication/Register";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Authentication/Login";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Toaster />
      </Router>
    </>
  );
};

export default App;
