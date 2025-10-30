import React, { useState } from 'react';
import port from '../assets/img/portfolio.jpg';
import parlour from '../assets/img/parlour.png';
import organic from '../assets/img/organic.jpg';
import gk from '../assets/img/gk.jpg';
import whitesend from '../assets/img/whitesend.png';
import github from '../assets/img/github.png';

const Projects = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    background: 'linear-gradient(100deg,#003ebbff,#5600a7ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textAlign: 'center',
    marginTop: '40px',
    marginBottom: '40px',
  };

  const techStack = ['HTML', 'CSS', 'JavaScript', 'React'];

  const projects = [
    {
      title: 'Portfolio Platform',
      img: port,
      desc: 'A responsive portfolio built using React and Vite.',
      demoLink: 'https://pandi1718.github.io/portfolio/',
      codeLink: 'https://github.com/pandi1718/portfolio',
    },
    {
      title: 'Tourism Web App',
      img: organic,
      desc: 'A travel-based app showcasing destinations and packages.',
      demoLink: 'https://pandi1718.github.io/hooplaa/',
      codeLink: 'https://github.com/pandi1718/hooplaa',
    },
    {
      title: 'E-Commerce Demo',
      img: parlour,
      desc: 'An interactive shopping site using React components.',
      demoLink: 'https://pandi1718.github.io/ecommerce-demo/',
      codeLink: 'https://github.com/pandi1718/ecommerce-demo',
    },
    {
      title: 'Weather Forecast',
      img: gk,
      desc: 'A weather app fetching live data using API integration.',
      demoLink: 'https://pandi1718.github.io/weather-app/',
      codeLink: 'https://github.com/pandi1718/weather-app',
    },
  ];

  const cardStyle = (isHovered) => ({
    border: 'none',
    borderRadius: '14px',
    width: '100%',
    maxWidth: '580px',
    overflow: 'hidden',
    boxShadow: isHovered
      ? '0 10px 20px rgba(0, 0, 0, 0.25)'
      : '0 4px 12px rgba(0, 0, 0, 0.12)',
    background: '#fff',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
    cursor: 'pointer',
    height: 'auto',
  });

  return (
    <div
      style={{
        background: '#ecf8ff',
        minHeight: '100vh',
        padding: '40px 20px 80px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1 style={titleStyle}>All Projects</h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(300px, 1fr))',
          gap: '25px',
          justifyItems: 'center',
          width: '85%',
          maxWidth: '1300px',
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={cardStyle(hoverIndex === index)}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <img
              src={project.img}
              alt={project.title}
              style={{
                width: '100%',
                height: '230px',
                objectFit: 'cover',
                objectPosition: 'center',
                transition: 'transform 0.5s ease',
                transform: hoverIndex === index ? 'scale(1.05)' : 'scale(1)',
              }}
            />

            <div style={{ padding: '18px 22px 22px 22px' }}>
              <h2 style={{ margin: '0 0 10px 0', color: '#111', fontSize: '1.4rem' }}>
                {project.title}
              </h2>
              <p
                style={{
                  color: '#555',
                  marginBottom: '15px',
                  fontSize: '0.95rem',
                  lineHeight: '1.5',
                }}
              >
                {project.desc}
              </p>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '18px',
                }}
              >
                {techStack.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      background: '#f0f0f0',
                      borderRadius: '20px',
                      padding: '5px 12px',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      color: '#0037EA',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '20px',
                }}
              >
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    background: 'linear-gradient(90deg,#0037EA,#5600a7ff)',
                    color: '#fff',
                    padding: '8px 20px',
                    borderRadius: '8px',
                    fontWeight: '600',
                    textDecoration: 'none',
                    border: '1px solid #fff',
                    transition: '0.3s',
                  }}
                >
                  <img
                    src={whitesend}
                    alt="demo"
                    style={{ width: '18px', marginRight: '8px' }}
                  />
                  Demo
                </a>

                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    background: 'linear-gradient(90deg,#0037EA,#5600a7ff)',
                    color: '#fff',
                    padding: '8px 20px',
                    borderRadius: '8px',
                    fontWeight: '600',
                    textDecoration: 'none',
                    border: '1px solid #fff',
                    transition: '0.3s',
                  }}
                >
                  <img
                    src={github}
                    alt="github"
                    style={{ width: '20px', marginRight: '8px' }}
                  />
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
