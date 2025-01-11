import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import ExpeertSession from "./components/ExpeertSession";
import DoctorInfo from "./components/DoctorInfo";
import DoctorDetails from "./components/DoctorDetails";
import DoctorReviews from "./components/DoctorReviews";

const App = () => {
  return (
    <>
    <Router>
    <Routes>
      <Route path="/" element={<DoctorInfo />} />
      <Route path="/" element={<DoctorDetails />} />
      <Route path="/" element={<DoctorInfo />} />
      <Route path="/Book an Appointment" element={<ExpeertSession />} />
    </Routes>
  </Router>
    </>

  );
};

export default App;
