import React, { useState } from 'react'
import call from '../assets/img/call.png'
import email from '../assets/img/email.png'
import git from '../assets/img/github.png'
import insta from '../assets/img/instragram.png'
import link from '../assets/img/linkdin.png'
import loca from '../assets/img/location.png'
import { Link } from 'react-router-dom'

const Contact = () => {
  
      const [hover, setHover] = useState(false)
      const getstyle = {
        fontSize: '3rem',
        fontWeight: 'bold',
        background: 'linear-gradient(100deg,#003ebbff,#5600a7ff)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        cursor: 'pointer'
      };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting me! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
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
      }}>
            <div style={{ textAlign: 'center', maxWidth: '700px', padding: '20px' }}>
        <h1
          style={getstyle}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
       Get In Touch
        </h1>
        <span style={{ color: '#858585ff' }}>
        Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing together.
        </span>      
        </div>

        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(3, 1fr)',
          justifyContent:'center',
          gap:'40px',
          width:'90%',
          marginTop:'50px'
        }}>
          {/* one  */}

          <div>            
      <form 
        onSubmit={handleSubmit} 
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '90%',
          maxWidth: '500px',
          background: 'white',
          padding: '30px',
          borderRadius: '15px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}
      >
      <h1 style={{fontSize:'1.5rem',color:'#003ebbff'}}>Send a Message</h1>
      <p style={{fontSize:'0.8rem',color:'#858585ff'}}>Fill out the form below and I'll get back to you as soon as possible.</p>
        <label style={{ marginBottom: '8px', fontWeight: '500',color:'#003ebbff'}}>Name</label>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange}
          required
          style={{
            padding: '10px',
            marginBottom: '15px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            outline: 'none'
          }}
        />

        <label style={{ marginBottom: '8px', fontWeight: '500',color:'#003ebbff' }}>Email</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange}
          required
          style={{
            padding: '10px',
            marginBottom: '15px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            outline: 'none'
          }}
        />

        <label style={{ marginBottom: '8px', fontWeight: '500',color:'#003ebbff' }}>Message</label>
        <textarea 
          name="message" 
          value={formData.message} 
          onChange={handleChange}
          required
          rows="5"
          style={{
            padding: '10px',
            marginBottom: '20px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            outline: 'none',
            resize: 'none'
          }}
        ></textarea>

        <button 
          type="submit"
          style={{
            background: 'linear-gradient(100deg,#003ebbff,#5600a7ff)',
            color: 'white',
            padding: '12px',
            border: 'none',
            borderRadius: '10px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.background = 'linear-gradient(100deg,#5600a7ff,#003ebbff)'}
          onMouseOut={(e) => e.target.style.background = 'linear-gradient(100deg,#003ebbff,#5600a7ff)'}
        >
          Send Message
        </button>
      </form>
          </div>

          {/* second  */}
          
<div
  style={{
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    maxWidth: '500px',
    background: 'white',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    gap: '20px'
  }}
>
  <h1 style={{ fontSize: '1.5rem', color: '#003ebbff' }}>Contact Information</h1>
  <p style={{ fontSize: '0.9rem', color: '#858585ff',marginTop:'-20px' }}>
    Reach out through any of these channels
  </p>

  {/* Email Row */}
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      backgroundColor: '#f3f6faff',
      padding: '12px 15px',
      borderRadius: '10px',
      transition: 'transform 0.2s ease',
      cursor: 'pointer',
    }}
    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
  >
    <div
      style={{
        background: 'linear-gradient(100deg,#003ebbff,#5600a7ff)',
        borderRadius: '10px',
        padding: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
      }}
    >
      <img
        src={email}
        alt="mail"
        style={{ width: '24px', height: '24px' }}
      />
    </div>

    <div>
      <p style={{ margin: 0, fontSize: '0.9rem', color: '#555' }}>Email</p>
      <p style={{ margin: 0, fontSize: '0.85rem', color: '#000000ff',fontWeight: '600', }}>soundharapandiyan0@gmail.com</p>
    </div>
  </div>
  {/* Call row  */}
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      backgroundColor: '#f3f6faff',
      padding: '12px 15px',
      borderRadius: '10px',
      transition: 'transform 0.2s ease',
      cursor: 'pointer',
    }}
    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
  >
    <div
      style={{
        background: 'linear-gradient(100deg,#003ebbff,#5600a7ff)',
        borderRadius: '10px',
        padding: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
      }}
    >
      <img
        src={call}
        alt="call"
        style={{ width: '24px', height: '24px' }}
      />
    </div>

    <div>
      <p style={{ margin: 0, fontSize: '0.9rem', color: '#555' }}>Phone</p>
      <p style={{ margin: 0, fontSize: '0.85rem', color: '#000000ff',fontWeight: '600', }}>+91 7708211681</p>
    </div>
  </div>
  {/* location row  */}
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      backgroundColor: '#f3f6faff',
      padding: '12px 15px',
      borderRadius: '10px',
      transition: 'transform 0.2s ease',
      cursor: 'pointer',
    }}
    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
  >
    <div
      style={{
        background: 'linear-gradient(100deg,#003ebbff,#5600a7ff)',
        borderRadius: '10px',
        padding: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
      }}
    >
      <img
        src={loca}
        alt="location"
        style={{ width: '24px', height: '24px' }}
      />
    </div>

    <div>
      <p style={{ margin: 0, fontSize: '0.9rem',  color: '#555' }}>Location</p>
      <p style={{ margin: 0, fontSize: '0.85rem', color: '#000000ff',fontWeight: '600',}}>Namakkal, Tamilnadu.</p>
    </div>
  </div>
</div>
          {/* third */}
          
<div
  style={{
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    maxWidth: '500px',
    background: 'white',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    gap: '20px'
  }}
>
  <h1 style={{ fontSize: '1.5rem', color: '#003ebbff' }}>Follow Me</h1>
  <p style={{ fontSize: '0.9rem', color: '#858585ff',marginTop:'-20px' }}>
   Connect with me on social platforms
  </p>

  {/* github Row */}
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      backgroundColor: '#f3f6faff',
      padding: '12px 15px',
      borderRadius: '10px',
      transition: 'transform 0.2s ease',
      cursor: 'pointer',
    }}
    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
  >
        <a 
  href="https://github.com/pandi1718" 
  target="_blank" 
  rel="noopener noreferrer"
  style={{ textDecoration: 'none', color: 'inherit',display:'flex'}}
>
    <div
      style={{
        background: 'linear-gradient(100deg,#003ebbff,#5600a7ff)',
        borderRadius: '10px',
        padding: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
      }}
    >
      <img
        src={git}
        alt="github"
        style={{ width: '24px', height: '24px' }}
      />
    </div>

    <div style={{marginLeft:'20px'}}>
      <p style={{ margin: 0, fontSize: '0.9rem', color: '#555' }}>Github</p>
      <p style={{ margin: 0, fontSize: '0.85rem', color: '#000000ff',fontWeight: '600', }}>https://github.com/pandi1718</p>
    </div>
    </a>
  </div>
  {/* linkedin row  */}
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      backgroundColor: '#f3f6faff',
      padding: '12px 15px',
      borderRadius: '10px',
      transition: 'transform 0.2s ease',
      cursor: 'pointer',
    }}
    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
  >
    
    <a 
  href="https://www.linkedin.com/in/soundharapandiyan0/" 
  target="_blank" 
  rel="noopener noreferrer"
  style={{ textDecoration: 'none', color: 'inherit',display:'flex'}}
>
    <div
      style={{
        background: 'linear-gradient(100deg,#003ebbff,#5600a7ff)',
        borderRadius: '10px',
        padding: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
      }}
    >
      <img
        src={link}
        alt="linkedin"
        style={{ width: '24px', height: '24px' }}
      />
    </div>

    <div style={{marginLeft:'20px'}}>
      <p style={{ margin: 0, fontSize: '0.9rem', color: '#555' }}>Phone</p>
      <p style={{ margin: 0, fontSize: '0.85rem', color: '#000000ff',fontWeight: '600', }}>linkedin.com/in/soundharapandiyan0/</p>
    </div>
    </a>
  </div>
  {/* insta row  */}
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      backgroundColor: '#f3f6faff',
      padding: '12px 15px',
      borderRadius: '10px',
      transition: 'transform 0.2s ease',
      cursor: 'pointer',
    }}
    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
  >

    <a 
  href="https://www.instagram.com/pandiyar_ravusu/" 
  target="_blank" 
  rel="noopener noreferrer"
  style={{ textDecoration: 'none', color: 'inherit',display:'flex'}}
>
    <div
      style={{
        background: 'linear-gradient(100deg,#003ebbff,#5600a7ff)',
        borderRadius: '10px',
        padding: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
      }}
    >
            <img
        src={insta}
        alt="instragram"
        style={{ width: '24px', height: '24px' }}
      />
    </div>

    <div style={{marginLeft:'20px'}}>
      <p style={{ margin: 0, fontSize: '0.9rem',  color: '#555' }}>Insta I'd</p>
      <p style={{ margin: 0, fontSize: '0.85rem', color: '#000000ff',fontWeight: '600',}}>pandiyar_ravusu</p>

    </div>
    </a>
  </div>
</div>


        </div>
    </div>
  )
}

export default Contact