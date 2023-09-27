import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import Schedule from "./pages/Schedule";
import Live from "./pages/Live";
import Mission from "./pages/Mission";


const App = () => {

  return (
    <Router>
      <ToastContainer />
      <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="live" element={<Live />} />
            <Route path="mission" element={<Mission />} />
            <Route path="schedule" element={<Schedule />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
