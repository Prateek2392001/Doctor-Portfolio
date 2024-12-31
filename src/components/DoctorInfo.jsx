// import React from "react";

// const DoctorInfo = () => {
//   return (
//     <section className="doctor-info">
//       <img src="/public/prateek.jpg" alt="Dr. Bruce Willis" />
//       <div>
//         <div>
//           <h1>Prateek srivastava</h1>
//           <p>FullStack Developer</p>
//         </div>
//         <div>
//           <span>Followers: 850</span>
//           <span>Following: 18K</span>
//           <span>Fans: 250</span>
//         </div>
//         <button>Book an Appointment</button>
//       </div>
//     </section>
//   );
// };

// export default DoctorInfo;
import React from "react";
import "./DoctorProfile.css";

const DoctorProfile = () => {
  return (
    <div className="profile-container d-flex flex-column">
      <div className="profile-header">
        <img
          src="/public/prateek.jpg" // Replace with the actual image URL
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
