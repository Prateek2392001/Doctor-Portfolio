import React from "react";
import "./DoctorDetails.css";

const DoctorDetails = () => {
  return (
    <div className="details-container">
      {/* Left Section */}
      <div className="details-left">
        {/* About Section */}
        <div className="card p-3 m-2">
          <div className="about-section">
            <div className="about-header">
              <h4>A Little About Me</h4>
              <button className="follow-button">Follow +</button>
            </div>
            <p >
              Hello! I am Dr. Bruce Willis, a Gynaecologist in Sanjivni Hospital
              Surat. I love to work with all my hospital staff and senior
              doctors. Completed my graduation in Gynaecologist Medicine from
              the...
              <span className="read-more">Read More</span>
            </p>
          </div>
        </div>
        <div className="card p-3 m-2">
          <div className="languages d-flex flex-row justify-content-start m-1">
            <div className="languages-heading mt-1">
              <h5>Language Spoken</h5>
            </div>
            <div className="language-tags mt-3">
              <span className="m-3">English</span>
              <span className="m-3">Hindi</span>
              <span className="m-3">Telugu</span>
            </div>
          </div>
          <img className="logo" src="/src/assets/Frame.png" alt="logo" />
        </div>

        {/* Specialization Section */}
        <div className="card p-3 m-2">
          <div className="specialization-section pt-4">
            <h5>I Specialize In</h5>
            <div className="specializations pt-3">
              <span>Women's Health</span>
              <span>Skin Care</span>
              <span>Immunity</span>
              <span>Hair Care</span>
            </div>
          </div>
          <img className="logo" src="/src/assets/Frame2.png" alt="logo" />
        </div>

        {/* Concerns Section */}
        <div className="card p-3 m-2">
          <div className="concerns-section  pt-3">
            <h5>The Concerns I Treat</h5>
            <div className="concerns">
              <span>Skin Treatment</span>
              <span>Pregnancy</span>
              <span>Period Doubts</span>
              <span>Endometriosis</span>
              <span>Pelvic Pain</span>
              <span>Ovarian Cysts</span>
              <span className="more-concerns">+ 5 More</span>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="card p-3 m-2">
          <div className="experience-section pt-4">
            <h5>My Work Experience</h5>
            <p className="experience-summary">
              I HAVE BEEN IN PRACTICE FOR : <strong>7+ YEARS</strong>
            </p>
            <ul>
              <li>
                <strong>Midtown Medical Clinic</strong>{" "}
                <span>(2016-PRESENT)</span>
                <p>Senior Doctor</p>
              </li>
              <li>
                <strong>Midtown Medical Clinic</strong> <span>(2010-2015)</span>
                <p>Senior Doctor</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="details-right">
        {/* Appointment Section */}

        <div className="appointment-section">
          <h5>Appointment Fee</h5>
          <p className="fee">
            <strong>₹699.00</strong>
          </p>

          <h4>Select your mode of session</h4>
          <div className="session-options">
            <button>
              In-Clinic
              <br />
              <span>45 Mins</span>
            </button>
            <button className="active">
              Video
              <br />
              <span>45 Mins</span>
            </button>
            <button>
              Chat
              <br />
              <span>10 Mins</span>
            </button>
          </div>
          <h5>Pick a time slot</h5>
          <div className="time-slots">
            <div className="date-tabs">
              <span className="active">
                Mon, 10 Oct
                <br />
                <span>10 slots</span>
              </span>
              <span>
                Tue, 11 Oct
                <br />
                <span>02 slots</span>
              </span>
              <span>
                Wed, 12 Oct
                <br />
                <span>05 slots</span>
              </span>
            </div>
            <div className="time-slots">
              <div className="date-tabs">
                <h6>Morning</h6>
                <span className="active">09:00 AM</span>

                <span>09:30 AM</span>
                <span>10:00 AM</span>
                <span>10:15 AM</span>
                <span className="active">11:00 AM</span>
              </div>
              <div className="time-slots">
                <div className="date-tabs">
                  <h6>Evening</h6>
                  <span className="active">04:00 PM</span>
                  <span>04:15 PM</span>
                  <span>04:30 PM</span>
                  <span>04:45 PM</span>
                  <span>05:15 PM</span>
                </div>
              </div>
            </div>
          </div>
          <button className="make-appointment-button">
            Make An Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
