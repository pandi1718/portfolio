import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function BasicExample() {
  const [hover, setHover] = useState(null);

  const getStyle = (index) => ({
    color: hover === index ? '#fff' : '#003ebbff',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    padding: '5px 10px',
    background: hover === index ? '#003ebbff' : 'transparent',
    borderRadius: '8px',
    display: 'inline-block',
  });

  const links = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Skills', to: '/skill' },
    { name: 'Projects', to: '/projects' },
    { name: 'Experience', to: '/experience' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <Navbar expand="lg" className="custom-navbar" fixed="top">
      <Container>
        <Navbar.Brand
          href="#home"
          style={{
            color: '#003ebbff',
            fontWeight: 'bold',
            fontSize: '1.3rem',
          }}
        >
          Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ border: 'none' }} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center text-center gap-3">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                style={getStyle(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(null)}
              >
                {link.name}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>

      <style>{`
        .custom-navbar {
          background: #d1d5db;
          padding: 10px 0;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          z-index: 1000;
        }

        @media (max-width: 400px) {
          .navbar-collapse {
            background: #d1d5db;
            text-align: center;
            padding: 10px 0;
          }

          .navbar-nav .nav-link,
          .navbar-nav a {
            display: block;
            margin: 10px 0;
            font-size: 1rem;
          }
        }
      `}</style>
    </Navbar>
  );
}

export default BasicExample;
