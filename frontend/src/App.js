import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavbarComponent";
import LandingPage from "./components/LandingPage";
import RegisterPage from "./components/RegisterPage";
import Login from "./components/Login";
import 'tailwindcss/tailwind.css';

const App = () => {
  return (
    <Router>
      {/* Navbar akan selalu tampil */}
      <Navbar />

      {/* Routing halaman */}
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
