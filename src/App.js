import './App.css';
import Navbar from './components/navbar/Navbar';
import { Route,Routes } from 'react-router-dom';
import Contact from "./components/contact/Contact"
import Home from "./components/home/Home"
import Blog from "./components/blog/Blog"
// import Authenication from './componen/Authenication';
// import About from './componen/About';
// import Login from './componen/Login';
// import Profile from './componen/Profile';
// import Navbars from './componen/Navbar';
// import Homes from "./componen/Home"
// import RequireAuth from './componen/RequireAuth';
import { useEffect } from 'react';
import axios from 'axios';

function App() {

  let userdata={
    firstname:"sajfks",
    lastname:"asjf",
    email:"hfcj",
    graduation:"sjahkj"
  }


//   useEffect(()=>{
// console.log("hi")
//     axios.post("http://localhost:2004/send",{
//       graduation:"sahda",
//       firstname:"sahda",
//       lastname:"sahda",
//       email:"sahda"}).then(res => res.data).then(d=>console.log(d))
//   },[])


  fetch("http://localhost:2004/api1",{
    method:'post',
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(userdata)
  }).then(res=>res.json()).then(d=>console.log(d))

  return (

    <div className="App">
     
     <Navbar/>
     <Routes>
      <Route index element={<Home/>}></Route>
      <Route path='/blogs' element={<Blog/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>


     </Routes>
      {/* <Authenication>
      <Navbars/>
      <Routes>
        <Route index element={<Homes/>}></Route>
        <Route path='/about' element={<RequireAuth><About/></RequireAuth>} ></Route>
        <Route path='/profile' element={<Profile/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
      </Routes>
      </Authenication> */}
      
    </div>
  );
}

export default App;
