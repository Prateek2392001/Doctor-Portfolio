import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaUserMd, FaVideo, FaCommentDots } from "react-icons/fa";
import React from "react";
import "./ExpeertSession.css";
import Header from "./Header";

const ExpeertSession = () => {
  
  return (
    <>
    <Header />
      <div className="containers">
        <div className="bg-image">
          <div className="row">
            <div className="col-12">
              <div className="cards">
                <div className="img d-flex flex-column justify-content-center align-items-center align-self-center align-self-center">
                  <h1 className="heading text-center">
                    Find expert doctor For An clinic Session here
                  </h1>
                  <div class="p-2 d-flex flex-row btn-group col-6">
                    <button
                      class="btn btn-secondary text-black bg-white dropdown-toggle"
                      type="button"
                      id="triggerId"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Select Location
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="triggerId"
                    >
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                      <a class="dropdown-item disabled" href="#">
                        Disabled action
                      </a>
                      <h6 class="dropdown-header">Section header</h6>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">
                        After divider action
                      </a>
                    </div>
                    <div className="col-8">
                      <input
                        className="bg-white form-control col-12"
                        type="text"
                        placeholder="eg.Doctor, specialisation, Clinic name"
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-row justify-content-center p-3 ">
                  
                  <div class="dropdown open">
                    <a
                      class="btn btn-secondary dropdown-toggle m-2 bg-white text-black m-2"
                      type="button"
                      id="triggerId"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      expertise
                    </a>
                    <div class="dropdown-menu" aria-labelledby="triggerId">
                     
                    </div>
                  </div>
                  <div class="dropdown open">
                    <a
                      class="btn btn-secondary dropdown-toggle bg-white text-black m-2"
                      type="button"
                      id="triggerId"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Gender
                    </a>
                    <div class="dropdown-menu" aria-labelledby="triggerId">
                      
                    </div>
                  </div>
                  <div class="dropdown open">
                    <a
                      class="btn btn-secondary dropdown-toggle bg-white text-black m-2"
                      type="button"
                      id="triggerId"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Fees
                    </a>
                    <div class="dropdown-menu" aria-labelledby="triggerId">
                    
                    </div>
                  </div>
                  <div class="dropdown open">
                    <a
                      class="btn btn-secondary dropdown-toggle bg-white text-black m-2"
                      type="button"
                      id="triggerId"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Language
                    </a>
                    <div class="dropdown-menu" aria-labelledby="triggerId">
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                      <a class="dropdown-item disabled" href="#">
                        Disabled action
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-row justify-content-end align-items-end  pt-3">
              <div className="concerns">
                <span>Hair care x</span>
                <span>Female x</span>
                <span>Rs.0-Rs.500 x</span>
                <span>Hindi x</span>
              </div>
            </div>

            <div className="d-flex flex-row justify-content-center align-items-center align-self-center">
            <div className=" text-center m-3">
              <div
                style={{
                  backgroundColor: "#fff7e2",
                  width: "18rem",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                  padding: "1rem",
                }}
              >
                <img
                  src="Ellipse 725.png"
                  alt="Dr. Prerna Narang"
                  style={{
                    borderRadius: "50%",
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    marginBottom: "10px",
                  }}
                />
                <h4 style={{ fontWeight: "bold" }}>Dr. Prerna Narang</h4>
                <p style={{ margin: "5px 0", color: "#333" }}>
                  <FaUserMd style={{ marginRight: "5px", color: "#555" }} />
                  Male-Female Infertility
                </p>
                <p style={{ margin: "5px 0", color: "#555" }}>
                  <FaUserMd style={{ marginRight: "5px", color: "#555" }} />7
                  years of Experience
                </p>
                <p style={{ margin: "5px 0", color: "#777" }}>
                  <FaUserMd style={{ marginRight: "5px", color: "#555" }} />
                  Speaks: English, Hindi, Marathi
                </p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ textAlign: "center" }}>
                    <h5 style={{ margin: "5px 0", fontSize: "16px" }}>
                      <FaVideo
                        style={{ marginRight: "5px", color: "#28a745" }}
                      />
                      Video Consultation
                    </h5>
                    <p style={{ color: "#555", margin: "5px 0" }}>₹800</p>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <h5 style={{ margin: "5px 0", fontSize: "16px" }}>
                      <FaCommentDots
                        style={{ marginRight: "5px", color: "#007bff" }}
                      />
                      Chat Consultation
                    </h5>
                    <p style={{ color: "#555", margin: "5px 0" }}>Free</p>
                  </div>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <Button
                    style={{
                      width: "100%",
                      marginBottom: "5px",
                      backgroundColor: "#28a745",
                      border: "none",
                    }}
                  >
                    View Profile
                  </Button>
                  <Button
                    style={{
                      width: "100%",
                      backgroundColor: "#007bff",
                      border: "none",
                    }}
                  >
                    Book a Consultation
                  </Button>
                </div>
              </div>
            </div>
            <div className=" text-center m-3">
              <div
                style={{
                  backgroundColor: "#fff7e2",
                  width: "18rem",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                  padding: "1rem",
                }}
              >
                <img
                  src="Ellipse 725.png"
                  alt="Dr. Prerna Narang"
                  style={{
                    borderRadius: "50%",
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    marginBottom: "10px",
                  }}
                />
                <h4 style={{ fontWeight: "bold" }}>Dr. Prerna Narang</h4>
                <p style={{ margin: "5px 0", color: "#333" }}>
                  <FaUserMd style={{ marginRight: "5px", color: "#555" }} />
                  Male-Female Infertility
                </p>
                <p style={{ margin: "5px 0", color: "#555" }}>
                  <FaUserMd style={{ marginRight: "5px", color: "#555" }} />7
                  years of Experience
                </p>
                <p style={{ margin: "5px 0", color: "#777" }}>
                  <FaUserMd style={{ marginRight: "5px", color: "#555" }} />
                  Speaks: English, Hindi, Marathi
                </p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ textAlign: "center" }}>
                    <h5 style={{ margin: "5px 0", fontSize: "16px" }}>
                      <FaVideo
                        style={{ marginRight: "5px", color: "#28a745" }}
                      />
                      Video Consultation
                    </h5>
                    <p style={{ color: "#555", margin: "5px 0" }}>₹800</p>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <h5 style={{ margin: "5px 0", fontSize: "16px" }}>
                      <FaCommentDots
                        style={{ marginRight: "5px", color: "#007bff" }}
                      />
                      Chat Consultation
                    </h5>
                    <p style={{ color: "#555", margin: "5px 0" }}>Free</p>
                  </div>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <Button
                    style={{
                      width: "100%",
                      marginBottom: "5px",
                      backgroundColor: "#28a745",
                      border: "none",
                    }}
                  >
                    View Profile
                  </Button>
                  <Button
                    style={{
                      width: "100%",
                      backgroundColor: "#007bff",
                      border: "none",
                    }}
                  >
                    Book a Consultation
                  </Button>
                </div>
              </div>
            </div>
            <div className=" text-center m-3">
              <div
                style={{
                  backgroundColor: "#fff7e2",
                  width: "18rem",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                  padding: "1rem",
                }}
              >
                <img
                  src="Ellipse 725.png"
                  alt="Dr. Prerna Narang"
                  style={{
                    borderRadius: "50%",
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    marginBottom: "10px",
                  }}
                />
                <h4 style={{ fontWeight: "bold" }}>Dr. Prerna Narang</h4>
                <p style={{ margin: "5px 0", color: "#333" }}>
                  <FaUserMd style={{ marginRight: "5px", color: "#555" }} />
                  Male-Female Infertility
                </p>
                <p style={{ margin: "5px 0", color: "#555" }}>
                  <FaUserMd style={{ marginRight: "5px", color: "#555" }} />7
                  years of Experience
                </p>
                <p style={{ margin: "5px 0", color: "#777" }}>
                  <FaUserMd style={{ marginRight: "5px", color: "#555" }} />
                  Speaks: English, Hindi, Marathi
                </p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ textAlign: "center" }}>
                    <h5 style={{ margin: "5px 0", fontSize: "16px" }}>
                      <FaVideo
                        style={{ marginRight: "5px", color: "#28a745" }}
                      />
                      Video Consultation
                    </h5>
                    <p style={{ color: "#555", margin: "5px 0" }}>₹800</p>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <h5 style={{ margin: "5px 0", fontSize: "16px" }}>
                      <FaCommentDots
                        style={{ marginRight: "5px", color: "#007bff" }}
                      />
                      Chat Consultation
                    </h5>
                    <p style={{ color: "#555", margin: "5px 0" }}>Free</p>
                  </div>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <Button
                    style={{
                      width: "100%",
                      marginBottom: "5px",
                      backgroundColor: "#28a745",
                      border: "none",
                    }}
                  >
                    View Profile
                  </Button>
                  <Button
                    style={{
                      width: "100%",
                      backgroundColor: "#007bff",
                      border: "none",
                    }}
                  >
                    Book a Consultation
                  </Button>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpeertSession;
