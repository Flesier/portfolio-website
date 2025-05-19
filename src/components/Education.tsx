import React from 'react';
import '../styles/Education.css';

const Education: React.FC = () => {
  const education = [
    {
      program: "Software Engineering Program",
      institution: "ALX Africa",
      focus: "Full-Stack Development, Team Collaboration, Agile Projects"
    },
    {
      program: "Diploma, ICT",
      institution: "Kiambu Institute of Science and Technology",
      focus: "Information and Communication Technology"
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education & Training</h2>
        <div className="education-timeline">
          {education.map((item, index) => (
            <div key={index} className="education-item">
              <div className="education-content">
                <h3>{item.program}</h3>
                <h4>{item.institution}</h4>
                <p>Focus: {item.focus}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
