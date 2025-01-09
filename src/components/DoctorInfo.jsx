
// export default DoctorInfo;
import React from "react";
import "./DoctorProfile.css";

const DoctorProfile = () => {
  return (
    <div className="profile-container d-flex flex-column">
      <div className="profile-header">
        <img
          src="/public/vite.svg"
          alt="Dr. Bruce Willis"
          className="profile-image"
        />
        <div className="profile-details">
          <h2 className="doctor-name">
            Prateek Srivastava <span className="verified-badge"></span>
          </h2>
          <p className="doctor-specialty">MBBS</p>
          <div className="rating">
            <span className="rating-value">4.2</span>
            <span className="rating-stars">⭐⭐⭐⭐</span>
          </div>
        </div>
        <div className="profile-stats">
          <div className="stat">
            <span className="stat-value">850</span>
            <span className="stat-label">Followers</span>
          </div>
          <div className="stat">
            <span className="stat-value">18K</span>
            <span className="stat-label">Following</span>
          </div>
          <div className="stat">
            <span className="stat-value">250</span>
            <span className="stat-label">Posts</span>
          </div>
        </div>
        <button className="book-appointment-button">Book an Appointment</button>
      </div>
    </div>
  );
};

export default DoctorProfile;
