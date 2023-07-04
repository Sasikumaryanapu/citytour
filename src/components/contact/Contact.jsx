import React from 'react'
import "./Contact.scss"
import Sasi from "../../images/beach.jpg"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Contact = () => {
  return (
    <div className='contact'>

      <div>
        <img src={Sasi}  alt='sasi' />
        <h2>sasi kumar</h2>
        <h4>web Developer</h4>
      </div>
      <h3><pre>  Hi Travel lover !  <br/>  Am a developer from the city of <br/>  destiny, <br/>  Looking for an opportunity to prove <br></br>  my work.</pre></h3>
      <section>
        <h3><pre>  contact : 123456789</pre></h3>
        <h3><pre>  mail    : example123@gmail.com</pre></h3>
      </section>
      <div className='icons'>
        <LinkedInIcon sx={{color:"blue"}}/>
        <TwitterIcon sx={{color:"skyblue"}}/>
        <YouTubeIcon sx={{color:"red"}}/>
      </div>
    
    </div>
  )
}

export default Contact