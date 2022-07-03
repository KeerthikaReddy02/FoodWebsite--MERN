import React, {useState} from "react";
import logo from "../images/Logo.png";
import {Routes, Route, useNavigate} from 'react-router-dom';
import axios from "axios";

const Login = ({ setLoginUser}) =>
{

  const [user,setUser] = useState({
    Email:"",
    Password:""
  });

  const handleChange=event=>{
    const {name,value}=event.target
    setUser({
      ...user,
      [name]:value
    })
  }

  const navigate = useNavigate();
  const navigateTo=()=>{
    axios.post("http://localhost:4000/Login",user)
    .then(response=>{
      alert(response.data.message)
    setLoginUser(response.data.user)
    navigate("/allposts");
  })
}

  return(
    <div class="login row">
    <img src={logo} class="logo" alt="logo-img"/>
      <div class="col-lg-6"></div>
      <div class="div2 col-lg-6">
      <h1>Login</h1>

      <form class="rect1" action="index.html" method="post">
        <label class="form-label">Email</label>
        <br></br>
        <input onChange={handleChange} type="email" name="Email" value={user.Email} placeholder="Enter email" required/>
        <br></br><br></br>

        <label class="form-label">Password</label>
        <br></br>
        <input onChange={handleChange} type="password" name="Password" value={user.Password} placeholder="Enter password" required/>
      </form>


      <br></br>
      <button onClick={navigateTo} type="button" class="btn btn-warning bigbutton">Join now</button>
      </div>
      </div>
  );
}
export default Login;
