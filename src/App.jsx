import React from "react";
import Header from "./components/Header";
import DoctorInfo from "./components/DoctorInfo";
import DoctorDetails from "./components/DoctorDetails";
import DoctorReviews from "./components/DoctorReviews";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <DoctorInfo />
        <DoctorDetails />
        <DoctorReviews />
      </main>
    </div>
  );
};

export default App;
