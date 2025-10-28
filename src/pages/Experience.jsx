import React, { useState } from 'react'

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
              <p style={{fontSize:'.8rem'}}>
                 <img src="src/assets/img/map.png" alt="location" />Salem, Tamil Nadu</p>
             
            <div style={{gap:'5px',display:'flex'}}>
               <img src="src/assets/img/calender.png" alt="location"
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
               <img src="src/assets/img/edu.png" alt="location"
              style={{width:'20px',height:'20px'}}
              /> <p style={{fontSize:'.8rem'}}>Paavai College Of Engineering - Anna University</p>
            </div>
            
          <div style={{display:'flex',gap:'20px'}}>
              <p style={{fontSize:'.8rem'}}>
                 <img src="src/assets/img/map.png" alt="location" />Namakkal, Tamil Nadu</p>
             
            <div style={{gap:'5px',display:'flex'}}>
               <img src="src/assets/img/calender.png" alt="location"
              style={{width:'20px',height:'20px'}}
              /> <p style={{fontSize:'.8rem'}}>2022 – 2024</p>
            </div>
           
          </div>
          <p style={{color:'#858585ff'}}>Completed an MBA specializing in Human Resources and Marketing.
          Gained strong skills in team management, communication, and strategic planning, with a focus on understanding both people and market dynamics.
          </p>
  
           <p style={{color:'#003ebbff',fontWeight:'bold'}}>Bachelor of Business Administration (Business & Marketing)</p>

            <div style={{gap:'5px',display:'flex'}}>
               <img src="src/assets/img/edu.png" alt="location"
              style={{width:'20px',height:'20px'}}
              /> <p style={{fontSize:'.8rem'}}>Arignar Anna Govt. Arts College - Periyar University</p>
            </div>
            
          <div style={{display:'flex',gap:'20px'}}>
              <p style={{fontSize:'.8rem'}}>
                 <img src="src/assets/img/map.png" alt="location" />Namakkal, Tamil Nadu</p>
             
            <div style={{gap:'5px',display:'flex'}}>
               <img src="src/assets/img/calender.png" alt="location"
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