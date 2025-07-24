import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://rafiulalamkhan.com/projects/');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('✅ Project data:', data);
        setProjects(data);
      } catch (error) {
        console.error('❌ Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <section id="projects" className="section">
          <div className="container">
            <h1 className="section-title">My Projects</h1>
            {projects.length === 0 ? (
              <p className="no-projects">No projects found.</p>
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
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <h1 className="section-title">Contact Me</h1>
            <Contact />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
