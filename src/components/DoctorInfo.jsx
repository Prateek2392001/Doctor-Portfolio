import React from "react";
import "./DoctorProfile.css";
import DoctorDetails from "./DoctorDetails";
import DoctorReviews from "./DoctorReviews";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const DoctorProfile = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/Book an Appointment");
  };
  return (
    <>
      <Header />
      <div className="profile-container d-flex flex-column">
        <div className="profile-header">
          <img
            src="/Ellipse 727.png"
            alt="Dr. Bruce Willis"
            className="profile-image"
          />
          <div className="profile-details">
            <h5 className="doctor-name">
              Dr. Bruce Willis <span className="verified-badge"></span>
            </h5>
            <p className="doctor-specialty">Gynecologist</p>
            <div className="rating">
              <span className="rating-value">4.2</span>
              <span className="rating-stars">⭐⭐⭐⭐</span>
            </div>
          </div>
          <div className="profile-stats">
            <div className="stat">
              <span className="stat-label">Followers</span>
              <span className="stat-value">850</span>
            </div>
            <div className="stat">
              <span className="stat-label">Following</span>
              <span className="stat-value">18K</span>
            </div>
            <div className="stat">
              <span className="stat-label">Posts</span>
              <span className="stat-value">250</span>
            </div>
          </div>
          <button
            onClick={handleButtonClick}
            className="book-appointment-button"
          >
            Book an Appointment
          </button>
        </div>
      </div>
      <DoctorDetails />
      <DoctorReviews />
    </>
  );
};

export default DoctorProfile;
