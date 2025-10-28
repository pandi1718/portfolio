import React, { useEffect, useState } from 'react'
import Blue from '../assets/img/bluegithub.png';
import Black from '../assets/img/blackgithub.png';
import blackmail from '../assets/img/blackemail.png'
import bluemail from '../assets/img/blueemail.png'
import blacklinkdin from '../assets/img/blacklinkdin.png'
import bluelinkdin from '../assets/img/bluelinkdin.png'
import blackwhat from '../assets/img/blackwhatsapp.png'
import bluewhat from '../assets/img/bluewhatsapp.png'
import photo from '../assets/img/profileimage.png'
import Resume from '../assets/img/Soundhar.png'






const Home = () => {

  const[start,setStart]=useState(0)
  const changes =["Fullstack Developer","UI/UX Designer","Frontend Developer"]
  const[hover,setHover]=useState(false)
  const[hoverr,setHoverr]=useState(false)
  const [git,setGit]=useState(false)
  const [email,setEmail]=useState(false)
  const [link,setLink]=useState(false)
  const [what,setWhat]=useState(false)
  const [profile,setProfile]=useState(false)


  useEffect(()=>{
    const interval = setInterval(()=>{
      setStart((prev)=>(prev + 1) % changes.length )
      },1000)
      return()=>clearInterval(interval)
  },[])

  const style={
    background: hover
      ? 'linear-gradient(135deg, #003ebbff, #5600a7ff)'
      : 'linear-gradient(135deg, #5600a7ff, #003ebbff)',
    borderRadius: '10px',
    padding: '12px 25px',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    boxShadow: hover
      ? '0 4px 15px rgba(0, 0, 0, 0.2)'
      : '0 2px 5px rgba(0, 0, 0, 0.1)',
  }
  const stylee={
    background: hoverr
      ? 'linear-gradient(135deg, #5d6980ff, #07d460ff)'
      : 'linear-gradient(135deg, #07d460ff, #5d6980ff)',
    borderRadius: '10px',
    padding: '12px 25px',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    boxShadow: hoverr
      ? '0 4px 15px rgba(0, 0, 0, 0.2)'
      : '0 2px 5px rgba(0, 0, 0, 0.1)',
  }

  const getgitbuttonstyle ={
    marginTop:'30px',
    borderRadius:'50%',
    padding:'5px',
    border: git ?  "3px solid #003ebbff" : "3px solid #000000ff" ,
    display: 'inline-block',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: git ? '0 4px 15px rgba(0,0,0,0.3)' : 'none',
    transform: git ? 'scale(1.2)' : 'scale(1)',
  }
  const getemailbuttonstyle ={
    marginTop:'30px',
    borderRadius:'50%',
    padding:'7px',
    border: email ?  "3px solid #003ebbff" : "3px solid #000000ff" ,
    display: 'inline-block',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: email ? '0 4px 15px rgba(0,0,0,0.3)' : 'none',
    transform: email ? 'scale(1.2)' : 'scale(1)',
  }
  const getlinkdinbuttonstyle ={
    marginTop:'30px',
    borderRadius:'50%',
    padding:'7px',
    border: link ?  "3px solid #003ebbff" : "3px solid #000000ff" ,
    display: 'inline-block',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: link ? '0 4px 15px rgba(0,0,0,0.3)' : 'none',
    transform: link ? 'scale(1.2)' : 'scale(1)',
  }
  const getwhatbuttonstyle ={
    marginTop:'30px',
    borderRadius:'50%',
    padding:'7px',
    border: what ?  "3px solid #003ebbff" : "3px solid #000000ff" ,
    display: 'inline-block',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: what ? '0 4px 15px rgba(0,0,0,0.3)' : 'none',
    transform: what ? 'scale(1.2)' : 'scale(1)',
  }
  const getprofilebuttonstyle ={    
      borderRadius:'50%',
      boxShadow: profile ?  "2px 2px 15px blue" : "2px 2px 10px grey" ,
      height: profile ? '250px' : "250px",      
      overflow:'hidden',
      position:'absolute',
      width:'250px',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
  }
    const whatsappNumber = '+919952593657'
    const message = 'Hello Chandru! I saw your portfolio.'
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',margin:'auto 0',background:'#ecf8ffff',backgroundSize:'cover',height:'100vh'}}>
    {/* left side  */}
      <div style={{gap:'10px',justifyContent:'start',position:'fixed',left:0,margin:'auto 0px',marginLeft:'50px'}}>
    <img src="src/assets/img/clap.png" alt="clap" />
    <span>Helo,I'm</span>

    <h1 style={{
      fontSize:'3rem',
      fontWeight:'bold',
    }}>Soundhara pandiyan</h1>

    <h1 style={{
      fontSize:'3rem',
      fontWeight:'bold',
      background:'linear-gradient(100deg,#003ebbff,#5600a7ff)',
      WebkitBackgroundClip:'text',
      WebkitTextFillColor:'transparent'
    }}>{changes[start]}</h1>

    <span style={{color:'#626262ff'}}>Fresher Fullstack Developer with hands-on project experience.<br />
        Skilled in building responsive and user-friendly web apps.</span>
      
        <div style={{display:'flex',gap:'20px',marginTop:'30px'}}>
          <div>
          
          <button  style={style} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} >
            <a style={{textDecoration:'none',color:'#fff'}} href="#projects">View My Work </a></button>
          
          </div>
          {/* Resume  */}
          <div>
        <button style={stylee} onMouseEnter={()=>setHoverr(true)} onMouseLeave={()=>setHoverr(false)}>
          <a href="src/assets/img/Soundhar.png" 
          download="Soundharapandiyan_Resume"
          style={{textDecoration:'none',color:'#fff'}}
          >
         Download Resume
          <img src={Resume} alt="resume" style={{display:'none'}} />
          </a>
          </button>
          </div>
          </div>
          {/* git  */}
          <div style={{display:'flex',gap:'20px'}}>
          <div>
        <button style={getgitbuttonstyle}>
          <a href="https://github.com/pandi1718"
          target='_blank' rel="noopener noreferrer"
          onMouseEnter={()=>setGit(true)} 
          onMouseLeave={()=>setGit(false)}>
          <img src={git ? Blue : Black} alt="git" />
          </a>
        </button>
          </div>

          <div>
        <button style={getemailbuttonstyle}>
          <a href="https://play.google.com/store/apps/details?id=com.google.android.gm&hl=en-US"
          target='_blank' rel="noopener noreferrer"
          onMouseEnter={()=>setEmail(true)} 
          onMouseLeave={()=>setEmail(false)}>
          <img src={email ? bluemail : blackmail} alt="email" />
          </a>
        </button>
          </div>

          <div>
        <button style={getlinkdinbuttonstyle}>
          <a href="https://www.linkedin.com/in/soundharapandiyan0/"
          target='_blank' rel="noopener noreferrer"
          onMouseEnter={()=>setLink(true)} 
          onMouseLeave={()=>setLink(false)}>
          <img src={link ? bluelinkdin : blacklinkdin} alt="email" />
          </a>
        </button>
          </div>

          <div>
        <button style={getwhatbuttonstyle}>
          <a href={whatsappLink}
          target='_blank' rel="noopener noreferrer"
          onMouseEnter={()=>setWhat(true)} 
          onMouseLeave={()=>setWhat(false)}>
          <img src={what ? bluewhat : blackwhat} alt="email" />
          </a>
        </button>
          </div>
          </div>
      </div>
    {/* right side  */}

    <div
  style={{
    display: "flex",
    position: "fixed",
    right: 150,
    justifyContent: "center",
    alignItems: "center",
  }}
>
    <div style={{
      display:'flex',
      position:'fixed',
      width: '260px',
      height: '260px',
      borderRadius: '50%',
      border: '6px dotted transparent',
      animation: 'rotate 20s linear infinite',
      borderBottomColor:'#00bfff',
      borderTopColor:'#003ebb',
      borderRightColor:'#5600a7',
      borderLeftColor:'#5600a7',
      justifyContent:'center',
      alignItems:'center'
    }}> </div>
      <div style={getprofilebuttonstyle}
      onMouseEnter={()=>setProfile(true)}
      onMouseLeave={()=>setProfile(false)}
      >        
      <img src={photo} alt="profile" 
      style={{
        width: "80%",
        height: "110%",
        borderRadius: "0%",
      }}
      />
      </div>
<style>
{`
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

`}
</style>


      
    </div>
    


    </div>
  )
}

export default Home