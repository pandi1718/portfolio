import React, { useState } from 'react'
import edu from '../assets/img/edu.png'
import map from '../assets/img/map.png'
import calender from '../assets/img/calender.png'

const Experience = () => {
    const [hover, setHover] = useState(false)
  
    const getstyle = {
      fontSize: '3rem',
      fontWeight: 'bold',
      background: 'linear-gradient(100deg,#003ebbff,#5600a7ff)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      cursor: 'pointer'
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
        Experience & Education
        </h1>
        <span style={{ color: '#858585ff' }}>
          My professional journey and the experiences that have shaped my development skills.        </span>
      </div>

      <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '50px',
          marginTop: '40px',
          width: '90%',
          justifyContent: 'center',}}>

            {/* first */}
            <div style={{border:'1px solid #858585ff',padding:'10px',borderRadius:'7px'}}>
              <h2>Full Stack Development Trainee</h2>
              <p style={{color:'#003ebbff',fontWeight:'bold'}}>Fortune Innovatives</p>
          
          <div style={{display:'flex',gap:'20px'}}>
              <a style={{fontSize:'.8rem',textDecoration:'none',color:'#000'}}
              target='_blank' rel='noopener noreferer' href='https://www.google.com/maps/dir//2nd+Floor,+Fortune+innovatives_salem,+Navanidhi+Towers,+AVR+Roundana,+Junction+Main+Rd,+State+Bank+Colony,+Salem,+Tamil+Nadu+636005/@11.6761608,78.1251665,17z/data=!4m16!1m7!3m6!1s0x3babf115c7ad3957:0xee89d38e8d3831b0!2sFortune+innovatives_salem!8m2!3d11.6761608!4d78.1277414!16s%2Fg%2F11w1dsrnwj!4m7!1m0!1m5!1m1!1s0x3babf115c7ad3957:0xee89d38e8d3831b0!2m2!1d78.1277414!2d11.6761608?entry=ttu&g_ep=EgoyMDI1MTAyNy4wIKXMDSoASAFQAw%3D%3D'
              >
                 <img src={map} alt="location" />Salem, Tamil Nadu</a>
             
            <div style={{gap:'5px',display:'flex'}}>
               <img src={calender} alt="calender"
              style={{width:'20px',height:'20px'}}
              /> <p style={{fontSize:'.8rem'}}>Jan 2024 – Jun 2025</p>
            </div>
          </div>
          <p style={{color:'#858585ff'}}>Completed an intensive Full Stack Development program focused on real-world web application development using modern technologies. Gained hands-on experience in both frontend and backend development.</p>
          <p style={{fontWeight:'bold'}}>Key Learnings & Contributions:</p>

          <ul>
            <li>Developed multiple mini-projects using <strong> HTML, CSS, JavaScript, React, Node.js, and MongoDB.</strong></li>
            <li>Learned to build responsive web applications and implement <strong> RESTful APIs.</strong></li>
            <li>Worked with <strong> GitHub </strong>for version control and <strong>Figma</strong> for UI/UX design collaboration.</li>
            <li>Gained exposure to <strong> React Hooks, Bootstrap, </strong>and <strong> Vite-based React projects.</strong></li>
            <li>Practiced deploying and debugging applications in local and cloud environments.</li>
            </ul> 

            <p><strong>Technologies: </strong>HTML, CSS, JavaScript, React, Node.js, MongoDB, Figma, Git, Bootstrap</p>
           
            </div>

            {/* second  */}
          <div style={{border:'1px solid #858585ff',padding:'10px',borderRadius:'7px'}}>
              <h2>Education</h2>
              <p style={{color:'#003ebbff',fontWeight:'bold'}}>Master of Business Administration (HR & Marketing)</p>
          
  
            <div style={{gap:'5px',display:'flex'}}>
               <img src={edu} alt="education"
              style={{width:'20px',height:'20px'}}
              /> <p style={{fontSize:'.8rem'}}>Paavai College Of Engineering - Anna University</p>
            </div>
            
          <div style={{display:'flex',gap:'20px'}}>
              <a target='_blank' rel='noopener noreferrer' href='https://www.google.com/maps/dir//Pavai+College+Of+Technology,+NH-44,+Service+Rd,+Namakkal,+Tamil+Nadu+637018/@11.400784,78.1363483,14z/data=!4m17!1m8!3m7!1s0x3babc3a17494d5d7:0xe75435f30b4949b9!2sPavai+College+Of+Technology!8m2!3d11.400784!4d78.1605876!15sChdwYWF2YWkgY29sbGVnZSBuYW1ha2thbJIBB2NvbGxlZ2XgAQA!16s%2Fm%2F0gg6fm7!4m7!1m0!1m5!1m1!1s0x3babc3a17494d5d7:0xe75435f30b4949b9!2m2!1d78.1605876!2d11.400784?entry=ttu&g_ep=EgoyMDI1MTAyNy4wIKXMDSoASAFQAw%3D%3D'style={{fontSize:'.8rem',cursor:'pointer',textDecoration:'none',color:'#000'}}>
                 <img src={map} alt="map" />Namakkal, Tamil Nadu</a>
             
            <div style={{gap:'5px',display:'flex'}}>
               <img src={calender} alt="calender"
              style={{width:'20px',height:'20px'}}
              /> <p style={{fontSize:'.8rem'}}>2022 – 2024</p>
            </div>
           
          </div>
          <p style={{color:'#858585ff'}}>Completed an MBA specializing in Human Resources and Marketing.
          Gained strong skills in team management, communication, and strategic planning, with a focus on understanding both people and market dynamics.
          </p>
  
           <p style={{color:'#003ebbff',fontWeight:'bold'}}>Bachelor of Business Administration (Business & Marketing)</p>

            <div style={{gap:'5px',display:'flex'}}>
               <img src={edu} alt="degree"
              style={{width:'20px',height:'20px'}}
              /> <p style={{fontSize:'.8rem'}}>Arignar Anna Govt. Arts College - Periyar University</p>
            </div>
            
          <div style={{display:'flex',gap:'20px'}}>
              <a style={{fontSize:'.8rem',textDecoration:'none',color:'#000'}}
              target='_blank' rel='noopener noreferer' href='https://www.google.com/maps/place/Arignar+Anna+Government+Arts+College/@11.1731006,78.1634877,17z/data=!3m1!4b1!4m6!3m5!1s0x3babcc4845acdd6d:0xb8b96e7968f9cad4!8m2!3d11.1731006!4d78.1660626!16s%2Fg%2F1tfk7g10?entry=ttu&g_ep=EgoyMDI1MTAyNy4wIKXMDSoASAFQAw%3D%3D'
              >
                 <img src={map} alt="location" />Namakkal, Tamil Nadu</a>
             
            <div style={{gap:'5px',display:'flex'}}>
               <img src={calender} alt="calender"
              style={{width:'20px',height:'20px'}}
              /> <p style={{fontSize:'.8rem'}}>2019 – 2022</p>
            </div>
           
          </div>
          <p style={{color:'#858585ff'}}>It is an undergraduate degree that focuses on the principles of business management, finance, marketing, human resources, and entrepreneurship. The program is designed to equip students with practical and theoretical knowledge to manage business operations effectively and develop leadership and decision-making skills in a corporate environment.
          </p>
            </div>
      </div>
      
          <div style={{
          marginTop: '60px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',}}>
            <p style={{color:'#003ebbff',fontWeight:'bold'}}>Certifications & Awards</p>
            <div>
            <ul style={{color:'#000000ff'}}>
              <li>Completed Full Stack Development Training <br /> 
              <strong style={{color:'#003ebbff'}}> (HTML, CSS, JavaScript, React, Node.js, MongoDB)</strong>
              </li>
              <li>Designed multiple UI prototypes in Figma</li>
              <li>Created responsive portfolio and project websites</li>
            </ul>
            </div>
         
          </div>

    </div>
  )
}

export default Experience;