import React from 'react'
import Dailog from './dailog/Dailog'

import { useState } from 'react'
const Reuse = ({loc,info,food,time,vechiles,image,place}) => {

  const [pop,setPop]=useState(false)

  const reu={
    marginBottom:-46,
  }

  const cal=()=>{
    setTimeout(() => {
      setPop(true)
      
    }, 2000);
  }


  return (
    <div style={reu}  >
      <img  src={image}  alt={place} onClick={()=>cal()} />
      <h1 onClick={()=>cal()}>{place}</h1>
      {pop ?<Dailog  loc={loc} time={time} vechiles={vechiles} food={food} info={info} dai={setPop}  />:" "} 
        
    </div>
  )
}

export default Reuse