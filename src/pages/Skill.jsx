import React, { useState } from 'react';
import SkillBar from './SkillBar';

const Skill = () => {
  const [hover, setHover] = useState(false);

  const getstyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    background: 'linear-gradient(100deg,#003ebbff,#5600a7ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    cursor: 'pointer'
  };

  const frontend = [
    { skill: 'React/Next.js', percentage: 95 },
    { skill: 'TypeScript', percentage: 90 },
    { skill: 'Tailwind CSS', percentage: 85 },
    { skill: 'Vue.js', percentage: 80 },
  ];

  const backend = [
    { skill: 'Node.js', percentage: 95 },
    { skill: 'Python', percentage: 90 },
    { skill: 'REST APIs', percentage: 85 },
  ];

  const database = [
    { skill: 'AWS', percentage: 95 },
    { skill: 'MongoDB', percentage: 90 },
  ];

  const tools = [
    { skill: 'Github', percentage: 85 },
    { skill: 'Figma', percentage: 90 },
  ];

  const align = [
    { name: 'React' },
    { name: 'Node.js' },
    { name: 'TypeScript' },
    { name: 'Python' },
    { name: 'MongoDB' },
    { name: 'AWS' },
    { name: 'Tailwind CSS' },
    { name: 'Vue.js' },
    { name: 'Express.js' },
    { name: 'FastAPI' },
    { name: 'Git' },
  ];

  const cardStyle = {
    background: 'white',
    borderRadius: '15px',
    padding: '20px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#ecf8ffff',
        minHeight: '100vh',
        padding: '40px 0',
      }}
    >
      
      <div style={{ textAlign: 'center', maxWidth: '700px', padding: '20px' }}>
        <h1
          style={getstyle}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Skills & Expertise
        </h1>
        <span style={{ color: '#858585ff' }}>
          A comprehensive overview of my technical skills and the technologies I work with.
        </span>
      </div>

    
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '50px',
          marginTop: '40px',
          width: '90%',
          justifyContent: 'center',
        }}
      >
        <div style={cardStyle}>
          <h2 style={{ fontSize: '1.5rem' }}>Frontend</h2>
          {frontend.map((item, i) => (
            <SkillBar key={i} skill={item.skill} percentage={item.percentage} />
          ))}
        </div>

        <div style={cardStyle}>
          <h2 style={{ fontSize: '1.5rem' }}>Backend</h2>
          {backend.map((item, i) => (
            <SkillBar key={i} skill={item.skill} percentage={item.percentage} />
          ))}
        </div>

        <div style={cardStyle}>
          <h2 style={{ fontSize: '1.5rem' }}>Database</h2>
          {database.map((item, i) => (
            <SkillBar key={i} skill={item.skill} percentage={item.percentage} />
          ))}
        </div>

        <div style={cardStyle}>
          <h2 style={{ fontSize: '1.5rem' }}>Tools & Others</h2>
          {tools.map((item, i) => (
            <SkillBar key={i} skill={item.skill} percentage={item.percentage} />
          ))}
        </div>
      </div>

      <div
        style={{
          textAlign: 'center',
          marginTop: '60px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>Technology Stack</h1>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'center',
            maxWidth: '800px',
          }}
        >
          {align.map((item, i) => (
            <div
              key={i}
              style={{
                backgroundColor: '#dcdcdcff',
                padding: '8px 15px',
                borderRadius: '20px',
                fontWeight: '500',
              }}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
