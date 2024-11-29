import React from "react";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Authentication/Register";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Authentication/Login";
import AdminLogin from "./pages/admin/auth/Login";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Home from "./pages/home/Home";
import AddProduct from "./pages/admin/dashboard/products/AddProduct";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="/admin">
            <Route path="login" element={<AdminLogin />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="add-product" element={<AddProduct />} />
          </Route>
        </Routes>
        <Toaster />
      </Router>
    </>
  );
};

export default App;
