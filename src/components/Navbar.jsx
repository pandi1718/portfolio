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
    transition: 'color 0.1s linear',
    border:hover === index ? "none" : "none",
    padding:hover === index ? "5px" : 'none',
    background:hover ===index? "#003ebbff" : "none",
    borderRadius : hover === index ? "5px" : "none"
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
    <Navbar expand="lg" style={{ background: '#d1d5db',position:'fixed',width:'100%'}}>
      <Container>
        <Navbar.Brand href="#home" style={{color:'#003ebbff',fontWeight:'bold'}}>Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex gap-3 text-center">
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
    </Navbar>
  );
}

export default BasicExample;
