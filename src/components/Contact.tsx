import React from 'react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>Nairobi, Kenya</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <p>+254 718 426639</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <p>flesieronyango18@gmail.com</p>
            </div>
            <div className="contact-item">
              <i className="fab fa-github"></i>
              <p><a href="https://github.com/Flesier" target="_blank" rel="noopener noreferrer">github.com/Flesier</a></p>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
