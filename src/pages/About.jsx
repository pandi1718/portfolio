import React, { useState } from 'react';
import browser from '../assets/img/browser.png'

const About = () => {
  const [hover, setHover] = useState(false);
  const [like, setLike] = useState(false);

  const box = [
    { name: 'Frontend Expert', sub: 'React, Next.js, SQL, and modern CSS frameworks',  },
    { name: 'Backend Mastery', sub: 'Node.js, Python, database, and API architecture',},
    { name: 'Frontend Expert', sub: 'React, Next.js, SQL, and modern CSS frameworks', },
    { name: 'Backend Mastery', sub: 'Node.js, Python, database, and API architecture', }
  ];

  const style = {
    background: like
      ? 'linear-gradient(135deg, #003ebbff, #5600a7ff)'
      : 'linear-gradient(135deg, #5600a7ff, #003ebbff)',
    width: '50px',
    height: '50px',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15px',
    marginLeft: '10px'
  };

  const getstyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    background: 'linear-gradient(100deg,#003ebbff,#5600a7ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    cursor: 'pointer'
  };

  const btnStyle = {
    padding: '5px 10px',
    background: '#c4c4c4ff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginTop: '10px',
    color: '#000'
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#ecf8ffff',
      minHeight: '100vh',
      padding: '40px 0',
    }}>
      <div style={{ textAlign: 'center', maxWidth: '700px', padding: '20px' }}>
        <h1
          style={getstyle}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          About Me
        </h1>
        <span style={{ color: '#858585ff' }}>
          I'm a passionate Full Stack Developer Fresher who enjoys building clean and responsive web applications.
          I love transforming ideas into functional and visually appealing digital experiences using HTML, CSS, JavaScript, and React.
        </span>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: '50px',
        gap: '40px',
        flexWrap: 'wrap',
      }}>
        <div style={{ textAlign: 'left', flex: '1 1 45%' }}>
          <h1>My Journey</h1>
          <p>My journey in software development began during university, where I discovered my passion for creating digital experiences. What started as curiosity about how websites work has evolved into a career focused on building scalable, user-centered applications.</p>
          <p>I specialize in modern web technologies and have experience across the entire development stack. From crafting pixel-perfect user interfaces to designing robust backend architectures, I enjoy every aspect of bringing ideas to life.</p>
          <p>When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.</p>

          <h2>Current Focus</h2>
          <div style={{ gap: '10px', display: 'flex', flexWrap: 'wrap' }}>
            <button style={btnStyle}>React.js</button>
            <button style={btnStyle}>Express.js</button>
            <button style={btnStyle}>Mongoose</button>
            <button style={btnStyle}>SQL</button>
            <button style={btnStyle}>JavaScript</button>
          </div>
        </div>

        <div style={{ flex: '1 1 45%', textAlign: 'left' }}>
          {box.map((boxe, index) => (
            <div
              key={index}
              onClick={() => setLike(!like)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                border: '1px solid #ccc',
                borderRadius: '10px',
                padding: '10px 15px',
                marginBottom: '15px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                cursor: 'pointer'
              }}
            >
              <div style={style}>
                <img style={{ width: '60%', height: '60%' }} src={browser} alt="browser" />
              </div>
              <div>
                <h2 style={{ fontSize: '1rem', margin: 0 }}>{boxe.name}</h2>
                <p style={{ margin: 0 }}>{boxe.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
