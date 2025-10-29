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
import Clap from '../assets/img/clap.png'






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
    borderRadius: '10px',
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
    <div className='home-container' style={{display:'flex',alignItems:'center',justifyContent:'center',margin:'auto 0',background:'#ecf8ffff',backgroundSize:'cover',height:'100vh'}}>
    {/* left side  */}
      <div style={{gap:'10px',justifyContent:'start',position:'fixed',left:0,margin:'auto 0px',marginLeft:'50px'}}>
    <img className='clap-img' src={Clap} alt="clap" />
    <span className='span-sub'>Helo,I'm</span>

    <h1 className='home-tittle' style={{
      fontSize:'3rem',
      fontWeight:'bold',
    }}>Soundhara pandiyan</h1>

    <h1 className='homee-tittle' style={{
      fontSize:'3rem',
      fontWeight:'bold',
      background:'linear-gradient(100deg,#003ebbff,#5600a7ff)',
      WebkitBackgroundClip:'text',
      WebkitTextFillColor:'transparent'
    }}>{changes[start]}</h1>

    <span className='para' style={{color:'#626262ff'}}>Fresher Fullstack Developer with hands-on project experience.<br />
        Skilled in building responsive and user-friendly web apps.</span>
      
        <div className='button-container' style={{display:'flex',gap:'20px',marginTop:'30px'}}>
          <div>
          
          <button className='button-one'   style={style} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} >
            <a style={{textDecoration:'none',color:'#fff'}} href="#projects">View My Work </a></button>
          
          </div>
          {/* Resume  */}
          <div>
        <button className='button-two' style={stylee} onMouseEnter={()=>setHoverr(true)} onMouseLeave={()=>setHoverr(false)}>
          <a href={Resume}
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
          <div className='line' style={{display:'flex',gap:'20px'}}>
          <div>
        <button className='git-line' style={getgitbuttonstyle}>
          <a href="https://github.com/pandi1718"
          target='_blank' rel="noopener noreferrer"
          onMouseEnter={()=>setGit(true)} 
          onMouseLeave={()=>setGit(false)}>
          <img src={git ? Blue : Black} alt="git" />
          </a>
        </button>
          </div>

          <div>
        <button className='email-line' style={getemailbuttonstyle}>
          <a href="https://play.google.com/store/apps/details?id=com.google.android.gm&hl=en-US"
          target='_blank' rel="noopener noreferrer"
          onMouseEnter={()=>setEmail(true)} 
          onMouseLeave={()=>setEmail(false)}>
          <img src={email ? bluemail : blackmail} alt="email" />
          </a>
        </button>
          </div>

          <div>
        <button className='linkedin-line' style={getlinkdinbuttonstyle}>
          <a href="https://www.linkedin.com/in/soundharapandiyan0/"
          target='_blank' rel="noopener noreferrer"
          onMouseEnter={()=>setLink(true)} 
          onMouseLeave={()=>setLink(false)}>
          <img src={link ? bluelinkdin : blacklinkdin} alt="email" />
          </a>
        </button>
          </div>

          <div>
        <button className='whatsapp-line' style={getwhatbuttonstyle}>
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

    <div className='section-two'
  style={{
    display: "flex",
    position: "fixed",
    right: 450,
    justifyContent: "center",
    alignItems: "center",
  }}
>

  
        <div className='first' style={{
      display:'flex',
      position:'fixed',
      width: '400px',
      height: '400px',
      borderRadius: '50%',
      border: '10px solid transparent',
      animation: 'rota 20s linear infinite',
      borderBottomColor:'#003ebbff',
      borderTopColor:'#5600a7ff',
      borderRightColor:'#5d6980ff',
      borderLeftColor:'#07d460ff',
      justifyContent:'center',
      alignItems:'center',
    }}> </div>

    <div className='second' style={{
      display:'flex',
      position:'fixed',
      width: '350px',
      height: '350px',
      borderRadius: '50%',
      border: '5px dotted transparent',
      animation: 'rotate 25s linear infinite',
      borderBottomColor:'#003ebbff',
      borderTopColor:'#5600a7ff',
      borderRightColor:'#5d6980ff',
      borderLeftColor:'#07d460ff',
      justifyContent:'center',
      alignItems:'center'
    }}></div>

        <div className='third' style={{
      display:'flex',
      position:'fixed',
      width: '260px',
      height: '260px',
      borderRadius: '50%',
      border: '6px solid transparent',
      animation: 'rot 30s linear infinite',
      borderBottomColor:'#003ebbff',
      borderTopColor:'#5600a7ff',
      borderRightColor:'#5d6980ff',
      borderLeftColor:'#07d460ff',
      justifyContent:'center',
      alignItems:'center',      
      overflow:'hidden'
    }}> </div>

      <div style={getprofilebuttonstyle}
      onMouseEnter={()=>setProfile(true)}
      onMouseLeave={()=>setProfile(false)}
      >        
      <img className='naan' src={photo} alt="profile" 
      style={{
        width: "80%",
        height: "90%",
        borderRadius: "0%",
      }}
      />
      </div>
      <style>{`
        @keyframes rotate { from {transform: rotate(0deg);} to {transform: rotate(360deg);} }
        @keyframes rot { from {transform: rotate(360deg);} to {transform: rotate(0deg);} }
        @keyframes rota { from {transform: rotate(360deg);} to {transform: rotate(0deg);} }

      


        @media (max-width: 320px) {
          .home-container {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }

          .home-tittle {
            font-size: 1rem !important;
            text-align: center !important;    
            align-items: center;   
            justify-content: center; 
            display: flex ;
            position : fixed !important;
            top : 130px !important ;
            left : 90px !important;
          }

          .homee-tittle {
            font-size: 1rem !important;    
            align-items: center;   
            justify-content: center; 
            display: flex ;
            position : fixed !important;
            top : 160px !important ;
            left : 90px !important;
          }

          .para{
            font-size: .6rem !important;    
            align-items: center;   
            justify-content: center; 
            display: flex ;
            text-align: center;
            position : fixed !important;
            top : 190px !important ;
            left : 30px !important;
          }

          .span-sub{
            font-size: 1rem !important;    
            align-items: center;   
            justify-content: center; 
            display: flex ;
            text-align: center;
            position : fixed !important;
            top : 95px !important ;
            left : 150px !important;
          }

          .clap-img{
            width: 15% !important;
            height: auto !important;    
            align-items: center;   
            justify-content: center; 
            display: flex ;
            position : fixed !important;
            top : 80px !important ;
            left : 90px !important;
          }
        .button-one, .button-two{
        font-size: .5rem !important;    
        border-radius: 10px ;
        padding: 10px 15px;
        color: white;
        border: none;
        cursor: pointer;
        font-weight: normal;
         }
        .button-container{
          display:flex;
          position: relative ;
          top: 200px;    
          align-items: center;   
          justify-content: center;
        }
        .section-two{
          position: fixed !important;
          right: auto !important;
          top: 310px !important;
          left: 170px !important ;
          transform: scale(0.4);    
          align-items: center;   
          justify-content: center; 
          display: flex ;
          }
          .line{
          display: flex;
          position: fixed ;
          top : 370px !important ;     
          left : 80px !important ;       
          align-items: center;   
          justify-content: center;  
          }
          .git-line, .email-line, .linkedin-line, .whatsapp-line{
            width: 30px;
            height: 30px;
            display: flex;             
            align-items: center;   
            justify-content: center;    
            border-radius: 50%;
            background-color: #ecf8ffff;   
            transition: all 0.3s ease;
            overflow: hidden;
            padding: 0;    
          }
          .git-line img,.email-line img,.linkedin-line img,.whatsapp-line img {
            width: 150%;  
            height: 150%;   
            position: relative ;
            top : -8px ;   
            left: -4px;  
          }
      `}</style>



    </div>
    </div>
  )
}

export default Home