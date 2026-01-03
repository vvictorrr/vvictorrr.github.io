import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [expandedProjects, setExpandedProjects] = useState({});

  const projects = [
    {
      id: 1,
      title: 'Hexa-Quad-Tri Lock',
      description: ['The Hexa-Quad-Tri Lock is a combination lock that allows the user to input and set a four-digit, four-bit binary (hexadecimal) code and gives the user three attempts to correctly guess the solution before triggering a lockout or activating a security system. Unlike a normal four-digit decimal lock, a four-digit hexadecimal lock gives ~65,000 combinations instead of 10,000, allowing for greater security.',
        '     There are two sets of four double-pole, single-throw (DPST) quad switch blocks: one for setting the password that would under normal circumstances be obscured from the user, and another for the user to interact with and input the password. Using a series of XNOR and AND logic chips, the stored and input password can be compared to generate a signal that can be sent to a separate circuit to display the results to the user. A single push-button is used to activate the password-checking circuit, taking the output to either count up on a three-bit Johnson counter made using D-Flip-Flops if incorrect, or to clear the counter and activate a separate LED if correct. This LED can easily be connected to a physical locking mechanism or send out an external signal, allowing for easy modularity and adaptability. A Schmitt trigger and 555 timer were used in conjunction to reduce button bouncing (sending out multiple signals with a single press).',
        'This project follows a project-based learning approach, emphasizing hands-on design, practical application, and iterative debugging. The device was stress-tested using a large variety of passwords, verifying proper counting and clearing behavior on all attempts to ensure correct logic and functionality. Ultimately, the outcome of this project is a device capable of validating hexadecimal inputs, tracking failed attempts, and producing visual status indicators corresponding to system state.',
      'Currently working to publish and present at the American Society for Engineering Education Northeast Section (ASEE-NE) in 2026.'],
      tags: ['Electronics', 'Logic Gates', 'Hardware'],
      media: [
        { type: 'image', src: '/images/Circuit1.png', alt: 'Circuit diagram of activation and counting mechanism' },
        { type: 'image', src: '/images/Circuit2.png', alt: 'Circuit diagram of password verification mechanism' },
        { type: 'video', src: '/videos/ElectronicsFinalDemo.mp4', alt: 'Demonstration of working circuit' }
      ]
    },
    {
      id: 2,
      title: 'Battery Prognostics Modeling',
      description: ['Built and evaluated machine learning models to predict lithium-ion battery capacity fade and remaining useful life (RUL) using real NASA battery aging data. The project focused on feature engineering, regression modeling, and preventing data leakage when working with highly correlated time-series data. The goal was to identify key degradation patterns and build models that can anticipate battery failure before it occurs—an important problem for electric vehicles, renewable energy storage, and portable electronics.',
      'Using a large, structured dataset of 34 batteries tested over thousands of charge, discharge, and impedance cycles, I engineered physics-inspired features from raw voltage, current, temperature, and impedance measurements. These included voltage drop, discharge duration, internal resistance, and impedance phase metrics, allowing the models to capture nonlinear degradation behavior without processing full high-frequency time series.',
      'I performed extensive exploratory data analysis, revealing that higher operating temperatures accelerate capacity loss, while shorter discharge times strongly correlate with reduced RUL. Multiple regression models were trained and evaluated, including Linear Regression, K-Nearest Neighbors (KNN), Random Forest, and XGBoost, with careful data splitting by battery ID to prevent data leakage.',
      'Key Results:',
      ' - XGBoost achieved the best performance for capacity prediction (R² ≈ 0.94), highlighting the importance of impedance phase and internal resistance as aging indicators.',
      ' - KNN performed best for RUL prediction (R² ≈ 0.97), suggesting that local similarity between degradation cycles is highly informative.',
      ' - Nonlinear models significantly outperformed linear approaches, confirming that battery aging is driven by complex feature interactions rather than simple trends.'],
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
      title: 'Line Following Robot',
      description: 'Modeled the top and bottom plates in CAD and 3D printed them. Programmed the robot in arduino, used a basic color sensor on the bottom to follow the line.',
      tags: ['Flask', 'PostgreSQL', 'Full-Stack']
    },
    {
      id: 5,
      title: 'Brain Stroke Prediction',
      description: 'Alongside two partners, performed EDA and built many ML models on brain stroke patients to predict whether or not a person would have a brain stroke. Analyzed various risk factors including age, BMI, glucose levels, and lifestyle factors.',
      tags: ['Machine Learning', 'Healthcare', 'Data Analysis']
    },
    {
      id: 6,
      title: 'Brain Tumor Imaging',
      description: 'Trained a CNN on a image set of brain scans of individuals with and without brain tumors to predict if a person had a brain tumor or not. Implemented data augmentation techniques and achieved high accuracy on the validation set.',
      tags: ['Deep Learning', 'CNN', 'Medical Imaging']
    },
    {
      id: 7,
      title: 'Blackjack Algorithm',
      description: 'Developed an optimal strategy algorithm for blackjack gameplay using dynamic programming and probability theory.',
      tags: ['Algorithms', 'Python']
    }
  ];

  const researchs = [
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

  const skills = {
  'Programming Languages': ['Python', 'SQL', 'R', 'C++', 'JavaScript', 'HTML', 'CSS'],
  'Machine Learning & AI': ['TensorFlow', 'PyTorch', 'Scikit-learn'],
  // ... more categories
};
const coursework = [
  'DS3000 - Foundations of Data Science',
  'DS2500 - Intermediate Programming with Data',
  'DS3500 - Advanced Programming with Data',
  'CS3000 - Algorithms and Data',
  'CS3520 - Programming in C++',
  'DS3200 - Databases',
  'MATH3081 - Probability and Statistics',
  'MATH2331 - Linear Algebra',
  'MATH4606 - Math & Computational Methods for Physics',
  'PHYS2371 - Electronics',
  'PHYS2303 - Modern Physics',
  'CS1800 - Discrete Structures',
  'MATH2331 - Foundations of Cybersecurity',
  'PHIL 1145 - Tech and Human Values',
  // ... more courses
];

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

        {/* PROJECTS PAGE */}
        {currentPage === 'projects' && (
          <div className="card">
            <h1 className="title">Projects & Research</h1>
            <h2 className="title2">Projects</h2>
            <div className="projects-grid">
              {projects.map(project => {
                const isExpanded = expandedProjects[project.id];
                const descriptionLength = Array.isArray(project.description) 
                  ? project.description.join(' ').length 
                  : project.description.length;
                const needsReadMore = descriptionLength > 200;
                
                return (
                  <div key={project.id} className="project-card">
                    <h3 className="project-title">{project.title}</h3>
                    
                    <div className={`project-description ${!isExpanded && needsReadMore ? 'project-description-collapsed' : ''}`}>
                      {Array.isArray(project.description) ? (
                        project.description.map((paragraph, idx) => (
                          <p key={idx}>{paragraph}</p>
                        ))
                      ) : (
                        <p>{project.description}</p>
                      )}
                    </div>

                    {project.media && isExpanded && (
                      <div className="project-images">
                        {project.media.map((item, idx) => (
                          <div key={idx} className="project-image-container">
                            {item.type === 'image' ? (
                              <img 
                                src={item.src} 
                                alt={item.alt}
                                className="project-image"
                              />
                            ) : (
                              <video 
                                src={item.src}
                                className="project-video"
                                controls
                              >
                                Your browser does not support the video tag.
                              </video>
                            )}
                            <p className="image-caption">{item.alt}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    
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

                    {/* Show images even without Read More button if project has images but short description */}
                    {project.media && !needsReadMore && (
                      <div className="project-images">
                        {project.media.map((item, idx) => (
                          <div key={idx} className="project-image-container">
                            {item.type === 'image' ? (
                              <img 
                                src={item.src} 
                                alt={item.alt}
                                className="project-image"
                              />
                            ) : (
                              <video 
                                src={item.src}
                                className="project-video"
                                controls
                              >
                                Your browser does not support the video tag.
                              </video>
                            )}
                            <p className="image-caption">{item.alt}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <h2 className="title2">Research</h2>
            <div className="projects-grid">
              {researchs.map(research => {
                const isExpanded = expandedProjects[research.id];
                const descriptionLength = Array.isArray(research.description) 
                  ? research.description.join(' ').length 
                  : research.description.length;
                const needsReadMore = descriptionLength > 200;
                
                return (
                  <div key={research.id} className="project-card">
                    <h3 className="project-title">{research.title}</h3>

                    <div className={`project-description ${!isExpanded && needsReadMore ? 'project-description-collapsed' : ''}`}>
                      {Array.isArray(research.description) ? (
                        research.description.map((paragraph, idx) => (
                          <p key={idx}>{paragraph}</p>
                        ))
                      ) : (
                        <p>{research.description}</p>
                      )}
                    </div>

                    {research.media && isExpanded && (
                      <div className="project-images">
                        {research.media.map((item, idx) => (
                          <div key={idx} className="project-image-container">
                            {item.type === 'image' ? (
                              <img 
                                src={item.src} 
                                alt={item.alt}
                                className="project-image"
                              />
                            ) : (
                              <video 
                                src={item.src}
                                className="project-video"
                                controls
                              >
                                Your browser does not support the video tag.
                              </video>
                            )}
                            <p className="image-caption">{item.alt}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    
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
                    {/* Show images even without Read More button if research has images but short description */}
                    {research.media && !needsReadMore && (
                      <div className="project-images">
                        {research.media.map((item, idx) => (
                          <div key={idx} className="project-image-container">
                            {item.type === 'image' ? (
                              <img 
                                src={item.src} 
                                alt={item.alt}
                                className="project-image"
                              />
                            ) : (
                              <video 
                                src={item.src}
                                className="project-video"
                                controls
                              >
                                Your browser does not support the video tag.
                              </video>
                            )}
                            <p className="image-caption">{item.alt}</p>
                          </div>
                        ))}
                      </div>
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
            <h1 className="title">Skills & Coursework</h1>
            
            <div className="skills-section">
              <h2 className="section-heading">Technical Skills</h2>
              <div className="skills-grid">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category} className="skill-category">
                    <h3 className="skill-category-title">{category}</h3>
                    <div className="skill-tags">
                      {skillList.map((skill, idx) => (
                        <span key={idx} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="skills-section">
              <h2 className="section-heading">Relevant Coursework</h2>
              <div className="coursework-grid">
                {coursework.map((course, idx) => (
                  <div key={idx} className="coursework-item">
                    <span className="coursework-bullet">•</span>
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;