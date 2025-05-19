import React from 'react';
import '../styles/Skills.css';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "Vue.js", "Redux", "Bootstrap", "JavaScript", "Jest"]
    },
    {
      category: "Backend",
      skills: ["Python (Flask, Django)", "Node.js", "Express", "Django REST Framework"]
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MongoDB", "SQL"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "Azure", "Automated Testing", "REST & GraphQL APIs", "Microservices", "Stripe Integration"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <span className="skill-name">{skill}</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: `${Math.random() * 30 + 70}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
