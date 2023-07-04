import React, { useEffect, useState } from 'react'
import {Data} from "../../Data"
import "./Home.scss"
// import Dailog from '../dailog/Dailog'
import Reuse from '../Reuse'
import Dailog from '../dailog/Dailog'
const Home = () => {

  const [val,setVal]=useState()
  
  const scrolling=()=>{
   
    if(window.innerHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight)
    {
      // alert("sorry")
      window.scrollTo(0,0)
    }
    
}


  useEffect(()=>{
    
    window.addEventListener("scroll",scrolling)
    
},[])
 

const closeDailog=(ans)=>{

  setVal(ans)

      if(!ans.value){
        // setPop(false)
      }
     
}


  return (
    <div className='contain' >
      <div className='inp'>
      <input type='search' placeholder='search place' value={val} onChange={e=>closeDailog(e.target.value)} />
      </div>

      {
        val? Data.filter(f=>f.place.toLowerCase().includes(val)).map((d)=>{ 
          return <div className='content' key={d.id}>
                    { <Reuse  loc={d.location} key={d.id} time={d.timings} vechiles={d.vechiles} food={d.food} info={d.info} image={d.img} place={d.place}  /> }
                  </div>})

                  :Data.map((d)=>{ 
                     return <div className='content' key={d.id}>
                    <Reuse  loc={d.location} key={d.id} time={d.timings} vechiles={d.vechiles} food={d.food} info={d.info} image={d.img} place={d.place}  />

                    </div>
                })
      
    }
    </div>
  )
}

export default Home