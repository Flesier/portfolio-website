import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Creative and detail-oriented Software Engineer with hands-on experience in full-stack
              development using Python (Flask/Django), JavaScript (React, Vue), and backend systems
              powered by RESTful and GraphQL APIs.
            </p>
            <p>
              I am skilled in building scalable, user-centric applications and passionate about solving 
              real-world problems through tech. My background in Data Engineering combined with strong 
              teamwork abilities allows me to execute projects efficiently and effectively.
            </p>
            <p>
              Based in Nairobi, Kenya, I'm constantly exploring new technologies and methodologies 
              to enhance my development skills and create impactful solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
