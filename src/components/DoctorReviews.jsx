import React from "react";
import "./DoctorReviews.css";

const DoctorReviews = () => {
  return (
    <div className="card">
      <div className="reviews-container">
        {/* Featured Reviews Section */}
        <div className="reviews-section">
          <h3>Featured Reviews (102)</h3>
          <div className="review-card">
            <div className="review-header">
              <div className="reviewer-info">
                <img
                  src="/Frame 2608514.png"
                  alt="Alicent Hightower"
                  className="reviewer-avatar"
                  />
                <div>
                  <p className="reviewer-name">Alicent Hightower</p>
                  <p className="reviewer-consulted">Consulted for Skin Care</p>
                </div>
              </div>
              <p className="review-date">20 January 2023</p>
            </div>
            <div className="review-body">
              <div className="review-rating">⭐⭐⭐⭐⭐</div>
              <p>
                Might be a bit early to confirm, but yes I can see noticeable
                differences in my hairfall. Will write again after using it for
                longer periods.
              </p>
            </div>
          </div>

          <div className="review-card">
            <div className="review-header">
              <div className="reviewer-info">
                <img
                  src="/Frame 2608514.png"
                  alt="Alicent Hightower"
                  className="reviewer-avatar"
                />
                <div>
                  <p className="reviewer-name">Alicent Hightower</p>
                  <p className="reviewer-consulted">Consulted for Pregnancy</p>
                </div>
              </div>
              <p className="review-date">20 January 2023</p>
            </div>
            <div className="review-body">
              <div className="review-rating">⭐⭐⭐⭐⭐</div>
              <p>
                Might be a bit early to confirm, but yes I can see noticeable
                differences. Will write again after using it for longer periods.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorReviews;
