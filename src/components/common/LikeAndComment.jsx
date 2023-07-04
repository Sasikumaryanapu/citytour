import React,{useEffect, useState} from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import CancelIcon from '@mui/icons-material/Cancel';
import axios from "axios"
const LikeAndComment = ({place}) => {
    const [flag,setFlag]=useState(false)
  const [flag2, setFlag2] = useState(false)

  const [comment, setComment] = useState(null)
  const [comments, setComments] = useState([])

  const [count, setCount] = useState(0)


    const likes = () => {
        setFlag(!flag)
  

    }


    useEffect(()=>{
      if(flag==true)
      {
        setCount(prev=>prev+1)
        localStorage.setItem(place,JSON.stringify(count))
      
      }
      },[flag])

      useEffect(()=>{
            axios.post("http://localhost:2004/com",{
              comm:comment,
             }).then(res => res.data).then(d=>console.log(d))
          },[comments])

      useEffect(()=>{
       return localStorage.setItem(place,JSON.stringify(comments))
      },[comments])


    
  const commentss = (com) => {
    setComment(com)

  }

  
  const del = (d) => {
    setComments((ele) => {
      return ele.filter((item) => item !== d)
    })}

    return (
        <div>
            {flag ? <FavoriteOutlinedIcon onClick={() => likes()} sx={{ color: "red", width: 33, height: 33 }} /> : <FavoriteBorderOutlinedIcon onClick={() => likes()} sx={{ width: 33, height: 33 }} />}
            <ChatBubbleOutlineOutlinedIcon sx={{ width: 35, height: 33 }} onClick={() => setFlag2(!flag2)} /><br />
            {flag2 ?
              <div>
                <br></br>
                <input type='search' placeholder='comment' value={comment} onChange={(e) => commentss(e.target.value)} />
                <MapsUgcOutlinedIcon id="ic" onClick={() => setComments([...comments, comment])} />
                <div>
                  <h4>likes {
                      count
                    }</h4>  
                  <h4>comments</h4>
                  {
                    comments.map((m) => <pre> {m.slice(0, 1)} {m}           <CancelIcon sx={{ color: "brown", width: 15, height: 15, position: "relative", top: "4px" }} onClick={() => del(m)} />   </pre>)
                  }
                </div>
              
              </div> : ""}


        </div>
    )
}

export default LikeAndComment