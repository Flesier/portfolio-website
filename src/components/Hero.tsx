import React from 'react';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1>Flesier Akinyi Onyango</h1>
        <h2>Software Engineer | Full-Stack Developer | Cloud & Data Enthusiast</h2>
        <p>Building scalable, user-centric applications to solve real-world problems</p>
        <div className="hero-cta">
          <a href="#projects" className="primary-btn">View My Work</a>
          <a href="#contact" className="secondary-btn">Contact Me</a>
        </div>
        <div className="social-links">
          <a href="https://github.com/Flesier" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
