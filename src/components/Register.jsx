import React, {useState} from "react";
import logo from "../images/Logo.png";
import axios from "axios";
import {Routes, Route, useNavigate} from 'react-router-dom';

function Register()
{

  const [user,setUser] = useState({
    Name:"",
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
    const {Name,Email,Password}=user;
    if(Name && Email && Password)
    {
      axios.post("http://localhost:4000/Register",user)
      .then(response=>alert(response.data.message))
      navigate("/Login");
    }
    else
    {
      alert("invalid input");
    }
  };
  return(
    <div class="login row">
    <img src={logo} class="logo" alt="logo-img"/>
      <div class="col-lg-6"></div>
      <div class="div2 col-lg-6">
      <h1>Register</h1>

      <form class="rect2" action="/register" method="post">
      <label class="form-label">Name</label>
      <br></br>
      <input onChange={handleChange} type="text" name="Name" value={user.Name} placeholder="Enter name" required/>
      <br></br><br></br>

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
export default Register;
