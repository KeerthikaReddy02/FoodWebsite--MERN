import React from "react";
import Smallbutton from "./Smallbutton.jsx";
import logo from "../images/Logo.png";
import "../styles.css";

function Home()
{
  return(
    <div class="home row">
     <div class="div1 col-lg-6">
      <img src={logo} class="logo" alt="logo-img"/>
      <br></br><br></br><br></br><br></br>
      <h2>Better Food, Better Mood!</h2>
      <h1>Join us</h1>
      <h4>Gyros, The Foodies community to talk about everything related to food!</h4>
      <br></br><br></br>
      <div class="row">
      <div class="col-lg-6">
      <Smallbutton
      name={"Login"}/>
      </div>
      <div class="col-lg-6">
      <Smallbutton
      name={"Register"}/>
      </div>
      </div>
      </div>
    </div>);
}
export default Home;
