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
        'There are two sets of four double-pole, single-throw (DPST) quad switch blocks: one for setting the password that would under normal circumstances be obscured from the user, and another for the user to interact with and input the password. Using a series of XNOR and AND logic chips, the stored and input password can be compared to generate a signal that can be sent to a separate circuit to display the results to the user. A single push-button is used to activate the password-checking circuit, taking the output to either count up on a three-bit Johnson counter made using D-Flip-Flops if incorrect, or to clear the counter and activate a separate LED if correct. This LED can easily be connected to a physical locking mechanism or send out an external signal, allowing for easy modularity and adaptability. A Schmitt trigger and 555 timer were used in conjunction to reduce button bouncing (sending out multiple signals with a single press).',
        'This project follows a project-based learning approach, emphasizing hands-on design, practical application, and iterative debugging. The device was stress-tested using a large variety of passwords, verifying proper counting and clearing behavior on all attempts to ensure correct logic and functionality. Ultimately, the outcome of this project is a device capable of validating hexadecimal inputs, tracking failed attempts, and producing visual status indicators corresponding to system state.',
        'Published and presented at the 2026 ASEE Northeast Section Conference at Southern New Hampshire University. doi: 10.18260/1-2--58569'],
      tags: ['Electronics', 'Logic Gates', 'Hardware'],
      media: [
        { type: 'image', src: '/images/Circuit1.png', alt: 'Circuit diagram of activation and counting mechanism' },
        { type: 'image', src: '/images/Circuit2.png', alt: 'Circuit diagram of password verification mechanism' },
        { type: 'video', src: '/videos/ElectronicsFinalDemo.mp4', alt: 'Demonstration of working circuit' }
      ],
      links: [
        { text: 'Paper', url: 'https://peer.asee.org/58569' }
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
      media: [
        { type: 'image', src: '/images/CapB0006.png', alt: 'Sample visualization of model performances on capacity prediction'},
        { type: 'image', src: '/images/RULB0005.png', alt: 'Sample visualization of model performances on RUL prediction'}
      ],
      links: [
        { text: 'Paper', url: '/images/Battery_Prognostics_Paper.pdf' },
        { text: 'GitHub', url: 'https://github.com/vvictorrr/Battery-Prognostics-Analysis'}
      ]
    },
    {
      id: 3,
      title: 'Debt Tracker',
      description: ['Designed and built a full-stack web application that tracks shared expenses, simplifies debt networks, and reduces transaction fees. The system was tested in real-world use and demonstrated measurable financial savings by minimizing unnecessary peer-to-peer payments.',
        'The system allows users to create accounts, add friends, log payments, and split expenses across selected participants. Rather than requiring immediate reimbursements after every expense, the app computes net balances and applies debt cancellation and transfer logic so users only make the minimum number of payments necessary. Debts are restricted to friend connections, preventing unwanted or anonymous obligations.',
        'The application was built with a Flask (Python) backend, PostgreSQL database, and a lightweight HTML/CSS/JavaScript frontend. I designed the data model using UML class diagrams and a relational schema before implementation, then implemented authentication, friend relationships, expense tracking, and debt optimization logic.',
        'To validate real-world effectiveness, I analyzed usage data using pandas and matplotlib, visualizing spending categories, net balances, and avoided transaction fees under PayPal\'s pricing model. This analysis confirmed that debt simplification significantly reduces both the number of payments and cumulative fees for debtors and creditors.'
      ],
      tags: ['Flask', 'PostgreSQL', 'HTML/CSS'],
      links: [
        { text: 'GitHub', url: 'https://github.com/vvictorrr/debt-tracker'}
      ]
    },
    {
      id: 4,
      title: 'Line Following Robot',
      description: ['Built an autonomous line-following robot using 3D-printed components, IR sensors, and an Arduino Uno. Designed the robot chassis in CAD and fabricated custom top and bottom plates with precise mounting points for the microcontroller, motors, sensors, and wheels. Programmed the control logic in C++ on the Arduino, enabling the robot to reliably follow complex line paths and shapes using real-time IR sensor feedback.'],
      tags: ['CAD', 'Robotics', 'C++'],
      media: [
        { type: 'video', src: '/videos/IMG_9638.MOV', alt: 'Line Following Robot Demo'}
      ],
    },
    {
      id: 5,
      title: 'Brain Stroke Prediction',
      description: ['Alongside two partners, I developed and evaluated machine learning models to predict the likelihood of brain stroke using patient health and demographic data. The project focused on feature preprocessing, handling severe class imbalance, and improving true positive detection for rare but high-risk medical events.',
      'I led the data preprocessing and modeling pipeline for a K-Nearest Neighbors classifier. This included converting categorical health indicators into numerical representations and addressing missing smoking-status data using a weighted random imputation strategy, preserving the original distribution of known values. This preprocessing choice improved the model\'s true positive rate by 6–8%, highlighting the importance of informed handling of missing clinical data.',
      'Two classifiers, KNN and Random Forest, were trained and evaluated, with performance assessed using sensitivity (recall), specificity, and confusion matrices rather than accuracy alone. Due to strong class imbalance (stroke cases forming a small minority of the dataset), both models achieved high specificity but struggled with recall. KNN slightly outperformed Random Forest in detecting stroke cases, indicating that local similarity patterns were more informative than global decision boundaries for this dataset.',
      'Exploratory data analysis and visualization revealed that age, glucose level, hypertension, BMI, and heart disease were the strongest predictors of stroke risk, while gender, marital status, and residence type contributed minimally. These findings align with established medical understanding and helped validate the model\'s learned patterns.'
      ],
      tags: ['Machine Learning', 'Healthcare', 'Data Analysis'],
      links: [
        { text: 'Paper', url: '/images/Paper_Predicting_Brain_Strokes.pdf' },
        { text: 'GitHub', url: 'https://github.com/vvictorrr/Brain-Strokes-Prediction'}
      ]
    },
    {
      id: 6,
      title: 'Brain Tumor Imaging',
      description: ['Trained a convolutional neural network (CNN) to classify brain MRI images into four categories—glioma, meningioma, pituitary tumor, and no tumor—using a supervised deep learning pipeline built in TensorFlow/Keras. The model was trained on resized and normalized MRI scans and evaluated on a held-out test set, achieving 95.4% classification accuracy with a loss of 0.21.',
        'I implemented a custom data-loading pipeline using OpenCV and NumPy to preprocess images, including resizing to 224×224, pixel normalization, and categorical label encoding. The CNN architecture consisted of stacked convolution–max pooling layers for spatial feature extraction, followed by fully connected layers with dropout regularization to reduce overfitting. The model was trained using the Adam optimizer and categorical cross-entropy loss for multi-class classification.'
      ],
      tags: ['Deep Learning', 'CNN', 'Medical Imaging'],
      media: [
        { type: 'image', src: '/images/Te-me_0023.jpg', alt: 'Brain tumor example image 1'},
        { type: 'image', src: '/images/Te-pi_0164.jpg', alt: 'Brain tumor example image 2'}
      ],
      links: [
        { text: 'GitHub', url: 'https://github.com/vvictorrr/Brain-Tumors-CNN'}
      ]
    },
    {
      id: 7,
      title: 'Blackjack Algorithm',
      description: 'Developed an optimal strategy algorithm for blackjack gameplay using dynamic programming and probability theory.',
      tags: ['Algorithms', 'Python'],
      links: [
        {text: 'GitHub', url: 'https://github.com/vvictorrr/Blackjack-Odds'}
      ]
    },
    {
      id: 8,
      title: 'HEP-RAG: Physics Literature Q&A',
      description: [
        'Built a retrieval-augmented Q&A system over 80 high-energy physics papers (arXiv hep-ex, dark matter/mono-jet/MET searches) as a rigorous ablation-driven study rather than a demo. Every generated claim is cited to a specific paper and section, then checked by two independent signals — an LLM judge and a separately-trained NLI cross-encoder — before being labeled supported, uncertain, or flagged.',
        'Retrieval uses a hybrid of SPECTER2 dense embeddings and BM25 sparse search fused via reciprocal rank fusion, then reranked with a cross-encoder. A full ablation across four retrieval configurations revealed that SPECTER2 contributed 0% standalone Recall@5 on scientific text versus 93.3% for the full pipeline — a domain-mismatch failure mode I diagnosed and documented rather than hidden.',
        'The dual-signal hallucination detector (LLM-as-judge + DeBERTa-v3 NLI cross-encoder) achieved 0.59/0.97/0.74 precision/recall/F1. During testing it caught a real failure: a generated sentence citing correct physics numbers but attributed to the wrong source paper. The LLM judge was fooled by the sentence\'s fluency; the independent NLI model flagged it immediately — exactly the sycophancy-vs-independent-signal failure mode the architecture was designed to catch. Deployed on Streamlit Community Cloud.'
      ],
      tags: ['RAG', 'NLP', 'HuggingFace', 'Physics'],
      links: [
        { text: 'GitHub', url: 'https://github.com/vvictorrr/HEP-RAG' }
      ]
    },
    {
      id: 9,
      title: 'D&D Encounter Planner',
      description: 'A full-stack D&D 5e encounter planner that simulates a whole adventuring day of resource attrition rather than one isolated fight — custom party and monster builds with real spell damage, subclass mechanics, legendary actions, and damage-type resistance math across all 13 damage types.',
      tags: ['React', 'Flask', 'SQLAlchemy'],
      links: [
        { text: 'GitHub', url: 'https://github.com/vvictorrr/DnD-Encounter-Planner' }
      ]
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
      description: 'Conducted crystallography research under the direction of Prof. Chaoying Ni growing single crystals of a novel oxazolidinone compound named 5-(3-Acetyl-5-chloro-2-ethoxy-6-fluorophenyl)-2-oxazolidinone. Performed SEM and XRPD to monitor crystal formation and successfully resolved the compound\'s single-crystal structure and stereochemistry for further development of a new potential cancer drug. Results are formally published in a paper and were presented at the Spring 2024 American Chemical Society National Meeting.',
      tags: ['Research', 'Lab Skills', 'Chemistry'],
      links: [
        { text: 'Paper', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10993593/' },
      ]
    },
    {
      id: 3,
      title: 'ASEE NE 2026 — Digital Reaction-Time Game (co-author)',
      description: 'Co-authored publication at the 2026 ASEE Northeast Section Conference presenting a digital reaction-time electronic game designed to engage students in experimental STEM education. The system was built from digital logic ICs and used as a hands-on teaching tool in undergraduate electronics coursework. Authors: Kempton, Smith, Slezak, Li, Zhang, Heiman, Kumarakuru.',
      tags: ['Research', 'Electronics', 'Education'],
      links: [
        { text: 'Paper', url: 'https://peer.asee.org/58587' }
      ]
    },
    {
      id: 4,
      title: 'ASEE NE 2026 — Hexadecimal Combination Lock (first author)',
      description: 'First-authored publication at the 2026 ASEE Northeast Section Conference presenting a modular hexadecimal combination lock built from gate-level logic ICs, a Johnson counter for failed-attempt tracking, Schmitt trigger debounce circuitry, and a 555 timer. The paper covers finite-state machine design, hardware verification across a full input space, and the project-based learning methodology behind the build. Authors: Li, Slezak, Schmidt, Heiman, Kumarakuru.',
      tags: ['Research', 'Electronics', 'Hardware'],
      links: [
        { text: 'Paper', url: 'https://peer.asee.org/58569' }
      ]
    }
  ];

  const hobbies = [
    {
      id: 1,
      title: 'Robotics',
      description: ['Currently I am a member of NURobotics\' VexU team as a programmer. I have worked with teammates to design an autonomous path planning UI system that the robot would follow. Designed the pure pursuit algorithm that the robot would use to follow a given path in C++ while interacting with the onboard optometry system.',
      'Additionally, I am also currently teaching the club\'s internal Intro to Robotics course, guiding new members through the full hardware-software design process using CAD, 3D printing, and Arduino programming.',
      'Previously, I was the lead programmer and one of two pilots for my high school\'s FIRST Robotics team for two years. The team placed 2nd in the State and won the Judge\'s Choice Award and State Finalist Award',],
      media: [
        { type: 'image', src: '/images/HSKY_robot.png', alt: 'Current VEXU Robot (that\'s me behind them!)'},
      ]
    },
    {
      id: 2,
      title: 'Jewelry Making',
      description: ['I make chainmail style jewelry using high quality stainless-steel materials. See some of my work below!'],
      media: [
        { type: 'image', src: '/images/crossnecklace.png', alt: 'One of my favorite necklaces'},
        { type: 'image', src: '/images/bonenecklace.png', alt: 'Made from an old ring and real ethically sourced bones'},
        { type: 'image', src: '/images/triangles.png', alt: 'Matching pair of chainmail triangles, the necklace can be worn under a shirt to give the illusion of being fully armored!'},
        { type: 'image', src: '/images/bracelet.png', alt: 'One of the first projects I made, very simple bracelet'}
      ],
    },
    {
      id: 3,
      title: 'Sewing',
      description: ['I think sewing is an incredibly important skill for anyone to have. Primarily, I repair and tailor my own clothes but I have also made fully original pieces upcycled from old or thrifted clothes. I make all of my own patterns and have even made a giant axolotl plush from scratch.',
      'Here is some of my work!'],
      media: [
        { type: 'image', src: '/images/blackpants.png', alt: 'Upcycled fabric from about 3 pairs of jeans'},
        { type: 'image', src: '/images/greenshirt.png', alt: 'Commission piece for a good friend'},
        { type: 'image', src: '/images/applejoe1.png', alt: 'Made for my girlfriend\'s birthday'},
        { type: 'image', src: '/images/applejoe2.png', alt: 'Meet Apple Joe!'},
      ],
    },
  ];

  const toggleProject = (projectId) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const skills = {
    'Programming Languages': [
      'Python',
      'SQL',
      'C++',
      'C',
      'R',
      'JavaScript'
    ],
    'Web Technologies': [
      'React',
      'HTML',
      'CSS',
      'Flask',
      'REST APIs',
      'FastAPI',
      'Web Scraping (Beautiful Soup)'
    ],
    'AI & Machine Learning': [
      'Machine Learning',
      'Feature Engineering',
      'LLM/RAG Pipelines',
      'HuggingFace Transformers',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'TensorFlow',
      'PyTorch',
      'scikit-learn',
      'XGBoost',
      'LightGBM',
      'Natural Language Processing (NLP)',
      'Anomaly Detection',
      'Ablation Studies & Evaluation'
    ],
    'Cloud & Infrastructure': [
      'AWS Lambda',
      'AWS DynamoDB',
      'AWS EventBridge & SNS',
      'AWS CloudWatch & IAM',
      'Serverless Architecture',
      'Boto3',
      'HTCondor (Batch/Grid Computing)',
      'GitLab CI/CD',
      'Docker'
    ],
    'Vector Search & Databases': [
      'ChromaDB',
      'PostgreSQL',
      'MySQL',
      'Apache Derby',
      'pgvector-compatible semantic indexing'
    ],
    'Tools & Platforms': [
      'Git',
      'GitHub',
      'VS Code',
      'Jupyter Notebook',
      'PyCharm',
      'Anaconda / Conda',
      'Streamlit',
      'Claude Code',
      'Render',
      'PROS'
    ],
    'Scientific Computing': [
      'PyROOT',
      'HTCondor',
      'SPECTER2 (Scientific Embeddings)',
      'BM25 Sparse Retrieval'
    ]
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
    'CS4100 - Artificial Intelligence',
    'DS4200 - Information Visualization',
    'DS4400 - Machine Learning & Data Mining 1',
    'DS4300 - Large-Scale Storage & Retrieval',
    'CY2550 - Foundations of Cybersecurity',
    'MATH4606 - Math & Computational Methods for Physics',
    'PHYS2371 - Electronics',
    'PHYS2303 - Modern Physics',
    'CS1800 - Discrete Structures',
    'PHIL1145 - Tech and Human Values',
  ];

  return (
    <div className="container">
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
          <button
            onClick={() => setCurrentPage('resume')}
            className={currentPage === 'resume' ? 'nav-button nav-button-active' : 'nav-button'}
          >
            Resume
          </button>
        </div>
      </nav>

      <main className="main">

        {/* HOME PAGE */}
        {currentPage === 'home' && (
          <div className="card home-card">
            <div className="home-content">
              <h1 className="name">Victor Li</h1>
              <div className="contact-info">
                <p>
                  <a href="mailto:li.victor@northeastern.edu" className="contact-link">
                    li.victor@northeastern.edu
                  </a>
                </p>
              </div>
              <p className="subtitle">AI/ML Engineer @ CERN · Student · Developer</p>

              <p className="text">
                I'm a student at Northeastern University pursuing a B.S. in Artificial Intelligence
                with minors in Mathematics and Physics. I'm currently on co-op as an AI/ML Engineer
                at the CMS Experiment at CERN, where I work on LLM/RAG systems for scientific
                documentation, ML-based anomaly detection on particle detector data, and distributed
                analysis pipelines supporting dark matter searches. I like building things that sit
                at the intersection of code, math, and creativity — from machine learning systems
                and full-stack apps to robots and electronics. Outside of tech, I practice sewing,
                jewelry making, and visual art, and I run tabletop D&D campaigns, which is where
                several of my side projects have started from a real need at the table.
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
              </div>
            </div>
            <div className="hexagon-wrapper">
              <div className="hexagon-border">
                <img
                  src="/images/headshot.jpg"
                  alt="Victor Li"
                  className="headshot-hexagon-large"
                />
              </div>
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
                const needsReadMore = descriptionLength > 400;

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
                              <img src={item.src} alt={item.alt} className="project-image" />
                            ) : (
                              <video src={item.src} className="project-video" controls>
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

                    {project.media && !needsReadMore && (
                      <div className="project-images">
                        {project.media.map((item, idx) => (
                          <div key={idx} className="project-image-container">
                            {item.type === 'image' ? (
                              <img src={item.src} alt={item.alt} className="project-image" />
                            ) : (
                              <video src={item.src} className="project-video" controls>
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
                const needsReadMore = descriptionLength > 700;

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
                              <img src={item.src} alt={item.alt} className="project-image" />
                            ) : (
                              <video src={item.src} className="project-video" controls>
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

                    {research.media && !needsReadMore && (
                      <div className="project-images">
                        {research.media.map((item, idx) => (
                          <div key={idx} className="project-image-container">
                            {item.type === 'image' ? (
                              <img src={item.src} alt={item.alt} className="project-image" />
                            ) : (
                              <video src={item.src} className="project-video" controls>
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

        {/* ABOUT PAGE */}
        {currentPage === 'about' && (
          <div className="card">
            <h1 className="title">About Me</h1>
            <h2 className="title2">Hobbies & Interests</h2>
            <div className="projects-grid">
              {hobbies.map(hobby => {
                const isExpanded = expandedProjects[hobby.id];
                const descriptionLength = Array.isArray(hobby.description)
                  ? hobby.description.join(' ').length
                  : hobby.description.length;
                const needsReadMore = descriptionLength > 400;

                return (
                  <div key={hobby.id} className="project-card">
                    <h3 className="project-title">{hobby.title}</h3>

                    <div className={`project-description ${!isExpanded && needsReadMore ? 'project-description-collapsed' : ''}`}>
                      {Array.isArray(hobby.description) ? (
                        hobby.description.map((paragraph, idx) => (
                          <p key={idx}>{paragraph}</p>
                        ))
                      ) : (
                        <p>{hobby.description}</p>
                      )}
                    </div>

                    {hobby.media && isExpanded && (
                      <div className="project-images">
                        {hobby.media.map((item, idx) => (
                          <div key={idx} className="project-image-container">
                            {item.type === 'image' ? (
                              <img src={item.src} alt={item.alt} className="project-image" />
                            ) : (
                              <video src={item.src} className="project-video" controls>
                                Your browser does not support the video tag.
                              </video>
                            )}
                            <p className="image-caption">{item.alt}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {hobby.links && (
                      <div className="project-links">
                        {hobby.links.map((link, idx) => (
                          <a key={idx} href={link.url} className="project-link">
                            {link.text} →
                          </a>
                        ))}
                      </div>
                    )}

                    {needsReadMore && (
                      <button
                        onClick={() => toggleProject(hobby.id)}
                        className="read-more-btn"
                      >
                        {isExpanded ? 'Show Less' : 'Read More'}
                      </button>
                    )}

                    {hobby.media && !needsReadMore && (
                      <div className="project-images">
                        {hobby.media.map((item, idx) => (
                          <div key={idx} className="project-image-container">
                            {item.type === 'image' ? (
                              <img src={item.src} alt={item.alt} className="project-image" />
                            ) : (
                              <video src={item.src} className="project-video" controls>
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

        {/* SKILLS PAGE */}
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

        {/* RESUME PAGE */}
        {currentPage === 'resume' && (
          <div className="card">
            <h1 className="title">Resume</h1>
            <div className="resume-controls">
              <a
                href="/images/Victor_Li_Resume.pdf"
                download
                className="cta-button cta-primary"
              >
                Download PDF
              </a>
            </div>
            <div className="resume-container">
              <iframe
                src="/images/Victor_Li_Resume.pdf"
                className="resume-iframe"
                title="Victor Li Resume"
              >
                <p>Your browser does not support PDFs.{' '}
                  <a href="/images/Victor_Li_Resume.pdf">Download the PDF</a> instead.
                </p>
              </iframe>
            </div>
          </div>
        )}

      </main>
    </div>
  );
};

export default App;
