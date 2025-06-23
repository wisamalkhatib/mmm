import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <svg className="about-us-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
        </svg>
        <h1>About Us</h1>
      </div>
      
      <div className="about-us-section">
        <p>
          Welcome to our company! We are a dedicated team of <span className="highlight">professionals</span> committed to
          delivering high-quality products and services to our customers.
        </p>
        
        <p>
          Founded in 2025, our mission is to <span className="highlight">innovate</span> and create solutions that make
          a positive impact on people's lives. We believe in collaboration, creativity,
          and continuous improvement.
        </p>
      </div>
      
      <div className="about-us-values">
        <div className="value-item">
          <h3>Innovation</h3>
          <p>Pushing boundaries to create meaningful solutions</p>
        </div>
        <div className="value-item">
          <h3>Quality</h3>
          <p>Committed to excellence in everything we do</p>
        </div>
        <div className="value-item">
          <h3>Collaboration</h3>
          <p>Working together to achieve greater results</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;