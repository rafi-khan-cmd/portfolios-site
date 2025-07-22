// Projects.js
import React from 'react';
import './Projects.css';

function Projects({ projects }) {
  return (
    <div className="projects-section">
      <h2>Projects</h2>
      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        projects.map((project) => (
          <div className="project-card" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>Tech Stack: {project.tech_stack.join(', ')}</p>
            <a href={project.github_url} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))
      )}
    </div>
  );
}

export default Projects;

