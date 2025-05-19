import React from 'react';
import '../styles/Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Birth Certificate Generator",
      description: "A web application to auto-generate birth certificates based on user input.",
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "PDFKit"],
      points: [
        "Developed the UI in React.js with live previews",
        "Used Node.js + Express for backend logic and MongoDB for data persistence",
        "Integrated PDF export using PDFKit to produce customizable certificates"
      ],
      github: "https://github.com/Flesier",
      demo: "#"
    },
    {
      title: "E-commerce Offers & Sales Website",
      description: "A full-featured e-commerce platform with offers and sales management.",
      technologies: ["React", "Redux", "Node.js", "Express", "Bootstrap", "Stripe"],
      points: [
        "Developed a responsive UI using React and Bootstrap for optimal UX",
        "Integrated Redux for efficient state handling",
        "Created a RESTful API with Node.js + Express to manage users, products, and orders",
        "Added Stripe payment gateway for secure checkout"
      ],
      github: "https://github.com/Flesier",
      demo: "#"
    },
    {
      title: "Employee Management System",
      description: "A complete system for managing employee records, performance, and attendance.",
      technologies: ["Vue.js", "Django", "Django REST Framework", "PostgreSQL"],
      points: [
        "Built a complete system for managing employee records, performance, and attendance",
        "Used PostgreSQL with a scalable schema design",
        "Created secure APIs with Django REST Framework",
        "Frontend in Vue.js with a real-time dashboard",
        "Implemented Role-Based Access Control for user management"
      ],
      github: "https://github.com/Flesier",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <ul className="project-points">
                  {project.points.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fab fa-github"></i> GitHub
                  </a>
                  {project.demo !== "#" && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
