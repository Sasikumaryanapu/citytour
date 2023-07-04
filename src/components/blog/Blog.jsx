import React, { useEffect, useState } from 'react'
import { Data } from "../../Data"

import LikeAndComment from '../common/LikeAndComment';
import "./Blog.scss"
const About = () => {

  const [flag3, setFlag3] = useState(false)

  const [flag1, setFlag1] = useState(false)


  const scrolling = () => {

    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight) {
      // alert("sorry")
      window.scrollTo(10, 10)
    }

  }


  useEffect(() => {

    window.addEventListener("scroll", scrolling)

  }, [])

  const likes = () => {

    setFlag3(true)
    setFlag1(!flag1)

    setTimeout(() => {
      setFlag3(false)
    }, 500)
  }


  
  return (
    <div className='con'>

      {
        Data.map((d, index) => {
          return <div key={index} className='blogContainer'>
            <img src={d.img} height={200} width={300} alt={d.place} />
            <h5>{d.info}</h5>
            <br></br>
           <LikeAndComment place={d.place}/>
           

          </div>
        })
      }

    </div>
  )
    }

export default About