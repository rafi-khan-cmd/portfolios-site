import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5050/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Navbar />

      <main className="main-content">
        <section id="projects" className="section">
          <h1 className="section-title">My Projects</h1>
          {projects.length === 0 ? (
            <p>No projects found.</p>
          ) : (
            <div className="projects-grid">
              {projects.map((project) => (
                <div className="project-card" key={project.id}>
                  <h2 className="project-title">{project.title}</h2>
                  <p className="project-description">{project.description}</p>
                  <p className="project-tech">
                    Tech Stack: {project.tech_stack}
                  </p>
                  <a
                    className="project-link"
                    href={project.repo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Repo
                  </a>
                </div>
              ))}
            </div>
          )}
        </section>

        <section id="contact" className="section">
          <h1 className="section-title">Contact Me</h1>
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;

