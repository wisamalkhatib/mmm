import React from 'react';
import './AboutMe.css';

function AboutMe() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="about-me-container">
      <div className="about-me-header">
        <svg className="about-me-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
        </svg>
        <h1>About Me</h1>
      </div>
      
      <div className="about-me-section">
        <p>
          Hello! I'm a <span className="highlight">passionate developer</span> with a love for creating 
          elegant and functional web applications.
        </p>
        
        <p>
          Since starting my coding journey in 2020, I've been dedicated to <span className="highlight">learning</span> and 
          mastering new technologies. I believe in writing clean, maintainable code and creating 
          intuitive user experiences.
        </p>
      </div>
      
      <div className="about-me-skills">
        <div className="skill-item">
          <h3>Frontend</h3>
          <p>React, HTML5, CSS3, JavaScript</p>
        </div>
        <div className="skill-item">
          <h3>Backend</h3>
          <p>Node.js, Express, MongoDB</p>
        </div>
        <div className="skill-item">
          <h3>Interests</h3>
          <p>UI/UX Design, Web Accessibility, Performance</p>
        </div>
      </div>
      dfdf
      
      <button 
        className="back-to-top-button" 
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path d="M12 4l-8 8h5v8h6v-8h5z" fill="currentColor" />
        </svg>
        Back to Top
      </button>
    </div>
  );
}

export default AboutMe;