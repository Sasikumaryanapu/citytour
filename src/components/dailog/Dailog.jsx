import React from 'react'
import "./Dailog.scss"

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ElectricRickshawIcon from '@mui/icons-material/ElectricRickshaw';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';

import mdb from "../../images/beachh.jpg"
import pyt from "../../images/beach.jpg"

const Dailog = ({dai,time,info,loc,food,vechiles}) => {
 
  return (
    <div className='cont'  >
      <div className="inner" >
        <img src={pyt}  alt='sas' />
        <img src={mdb} alt='hfgha' />
        <img src={pyt} alt='sagvsgfhas' />  
      </div>
        <h5 >{info}</h5>      
        <div className='info'>
          <section>
            <h3><AccessTimeIcon/></h3>
            <p>opens  : {time.opens}</p>
            <p>closes : {time.closes}</p>

          </section>
          <section>
            <h3><LocationOnOutlinedIcon/></h3>
            <p>{loc}</p>
          </section>
          <section>
            <h3><FastfoodIcon/></h3>
            <p>{food}</p>
          </section>
          <section>
            <h3></h3>
            <p><AirportShuttleIcon/> : {vechiles.buses}</p>
            <p><ElectricRickshawIcon/> : {vechiles.autos}</p>

          </section>
        </div>
        <button onClick={()=>dai(false)}>close</button>
    </div>
  )
}

export default Dailog