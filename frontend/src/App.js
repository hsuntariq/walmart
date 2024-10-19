import React from "react";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Authentication/Register";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
        <Toaster />
      </Router>
    </>
  );
};

export default App;
