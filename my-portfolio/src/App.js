import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [expandedProjects, setExpandedProjects] = useState({});

  const projects = [
    {
      id: 1,
      title: 'Hexaquad Tri-Lock',
      description: 'Alongside a partner, Electronics based project that involves a 4bit 4 input 3 attempt lock. Built the mechanism to activate the verification system and count the number of failures on a set of 3 leds using logic gates and a Johnson counter. On a correct attempt, the circuit turns on a separate LED.',
      tags: ['Electronics', 'Logic Gates', 'Hardware']
    },
    {
      id: 2,
      title: 'Battery Prognostics',
      description: 'Alongside a partner, performed EDA and built ML models on a NASA battery dataset to predict the remaining useful life and remaining capacity of a battery. Applied many electronics/physics based concepts. The project involved data preprocessing, feature engineering, and testing multiple machine learning algorithms including Random Forests, Neural Networks, and Support Vector Machines to achieve accurate predictions.',
      tags: ['Machine Learning', 'EDA', 'Physics'],
      links: [
        { text: 'Paper', url: '#' },
        { text: 'GitHub', url: '#' }
      ]
    },
    {
      id: 3,
      title: 'Debt Tracker',
      description: 'Single handedly built a full end to end flask web app and fully designed a SQL database from scratch using PostgresSQL. Tested with four friends over the course of a week long period and saved over $30 in PayPal fees by simplifying debts. The application features user authentication, debt simplification algorithms, and a clean interface for managing group expenses.',
      tags: ['Flask', 'PostgreSQL', 'Full-Stack']
    },
    {
      id: 4,
      title: 'Brain Stroke Prediction',
      description: 'Alongside two partners, performed EDA and built many ML models on brain stroke patients to predict whether or not a person would have a brain stroke. Analyzed various risk factors including age, BMI, glucose levels, and lifestyle factors.',
      tags: ['Machine Learning', 'Healthcare', 'Data Analysis']
    },
    {
      id: 5,
      title: 'Brain Tumor Imaging',
      description: 'Trained a CNN on a image set of brain scans of individuals with and without brain tumors to predict if a person had a brain tumor or not. Implemented data augmentation techniques and achieved high accuracy on the validation set.',
      tags: ['Deep Learning', 'CNN', 'Medical Imaging']
    },
    {
      id: 6,
      title: 'Blackjack Algorithm',
      description: 'Developed an optimal strategy algorithm for blackjack gameplay using dynamic programming and probability theory.',
      tags: ['Algorithms', 'Python']
    }
  ];

  const research = [
    {
      id: 1,
      title: 'ORNL Neutron Reflection',
      description: 'Collaborated with Prof. Miguel Fuentes-Cabrera and a small team to develop machine learning models for interpreting neutron reflectivity spectra of thin-film polymers, materials critical to next-generation energy storage. Built and tested diffusion-based models, applying techniques such as PCA, multilayer perceptrons, and autoencoders to analyze experimental data generated at the Spallation Neutron Source.',
      tags: ['Research', 'Machine Learning']
    },
    {
      id: 2,
      title: 'Harker ISE Crystallography',
      description: 'Conducted crystallography research under the direction of Prof. Chaoying Ni growing single crystals of a novel oxazolidinone compound named 5-(3-Acetyl-5-chloro-2-ethoxy-6-fluorophenyl)-2-oxazolidinone Performed SEM and XRPD to monitor crystal formation and successfully resolved the compound’s single-crystal structure and stereochemistry for further development of a new potential cancer drug. Results are formally published in a paper and were presented at the Spring 2024 American Chemical Society National Meeting',
      tags: ['Research', 'Machine Learning'],
      links: [
        { text: 'Paper', url: '#' },
      ]
    },
  ];

  // Function to toggle project expansion
  const toggleProject = (projectId) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  return (
    <div className="container">
      {/* Navigation Bar */}
      <nav className="nav">
        <div className="nav-container">
          <button
            onClick={() => setCurrentPage('home')}
            className={currentPage === 'home' ? 'nav-button nav-button-active' : 'nav-button'}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage('projects')}
            className={currentPage === 'projects' ? 'nav-button nav-button-active' : 'nav-button'}
          >
            Projects
          </button>
          <button
            onClick={() => setCurrentPage('about')}
            className={currentPage === 'about' ? 'nav-button nav-button-active' : 'nav-button'}
          >
            About
          </button>
          <button
            onClick={() => setCurrentPage('skills')}
            className={currentPage === 'skills' ? 'nav-button nav-button-active' : 'nav-button'}
          >
            Skills
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main">
        {/* HOME PAGE */}
        {currentPage === 'home' && (
          <div className="card">
            <h1 className="title">Victor Li</h1>
            <p className="subtitle">Student | Researcher | Developer</p>
            <p className="text">
              I’m a second-year student at Northeastern University majoring in Data Science with minors in Mathematics and Physics, 
              with a strong interest in building systems at the intersection of data, hardware, and science. 
              Whether I’m designing a database, building robots, training models on massive datasets, sewing clothes, 
              or designing jewelry, I love  the process of turning many complex parts into a single, coherent system. 
              Currently, I’m interested in applying data-driven methods to real-world engineering and scientific problems.
            </p>
            <div className="button-group">
              <button
                onClick={() => setCurrentPage('projects')}
                className="cta-button cta-primary"
              >
                View Projects
              </button>
              <a
                href="https://linkedin.com/in/victor-li"
                className="cta-button cta-secondary"
              >
                LinkedIn
              </a>
              <a
                href="victorli19707@gmail.com"
                className="cta-button cta-outline"
              >
                Contact
              </a>
            </div>
          </div>
        )}

        {/* PROJECTS PAGE - EMPTY */}
        {currentPage === 'projects' && (
          <div className="card">
            <h1 className="title">Projects & Research</h1>
            <h2 className="title2">Projects</h2>
            <div className="projects-grid">
              {projects.map(project => {
                const isExpanded = expandedProjects[project.id];
                const needsReadMore = project.description.length > 200;
                
                return (
                  <div key={project.id} className="project-card">
                    <h3 className="project-title">{project.title}</h3>
                    
                    <div className={`project-description ${!isExpanded && needsReadMore ? 'project-description-collapsed' : ''}`}>
                      <p>{project.description}</p>
                    </div>
                    
                    <div className="project-tags">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="tag">{tag}</span>
                      ))}
                    </div>
                    
                    {project.links && (
                      <div className="project-links">
                        {project.links.map((link, idx) => (
                          <a key={idx} href={link.url} className="project-link">
                            {link.text} →
                          </a>
                        ))}
                      </div>
                    )}
                    
                    {needsReadMore && (
                      <button 
                        onClick={() => toggleProject(project.id)}
                        className="read-more-btn"
                      >
                        {isExpanded ? 'Show Less' : 'Read More'}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
            <h2 className="title2">Research</h2>
            <div className="projects-grid">
              {research.map(research => {
                const isExpanded = expandedProjects[research.id];
                const needsReadMore = research.description.length > 200;
                
                return (
                  <div key={research.id} className="project-card">
                    <h3 className="project-title">{research.title}</h3>
                    
                    <div className={`project-description ${!isExpanded && needsReadMore ? 'project-description-collapsed' : ''}`}>
                      <p>{research.description}</p>
                    </div>
                    
                    <div className="project-tags">
                      {research.tags.map((tag, idx) => (
                        <span key={idx} className="tag">{tag}</span>
                      ))}
                    </div>
                    
                    {research.links && (
                      <div className="project-links">
                        {research.links.map((link, idx) => (
                          <a key={idx} href={link.url} className="project-link">
                            {link.text} →
                          </a>
                        ))}
                      </div>
                    )}
                    
                    {needsReadMore && (
                      <button 
                        onClick={() => toggleProject(research.id)}
                        className="read-more-btn"
                      >
                        {isExpanded ? 'Show Less' : 'Read More'}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ABOUT PAGE - EMPTY */}
        {currentPage === 'about' && (
          <div className="card">
            <h1 className="title">About Me</h1>
            <p className="placeholder">Content coming soon...</p>
          </div>
        )}

        {/* SKILLS PAGE - EMPTY */}
        {currentPage === 'skills' && (
          <div className="card">
            <h1 className="title">Skills</h1>
            <p className="placeholder">Content coming soon...</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;