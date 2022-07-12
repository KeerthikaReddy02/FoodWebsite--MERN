import React from "react";
import Smallbutton from "./Smallbutton.jsx";
import { useLocation } from 'react-router-dom';

function Viewpost(props)
{
  const {state}=useLocation();
  const {title,blog,cuisine}=state;
  console.log(title)
  return(
  <div class="allposts">
    <br></br>
    <h1>{title}</h1>
    <h4>Cuisine: {cuisine}</h4>
    <div class="rect">
    <label class="blogText" for="">{blog}</label>
    </div>
    <div class="post-button">
    </div>
    <Smallbutton
    name={"Back"}
    goto={"allposts"}/>
    <br></br><br></br>
  </div>
  );
}

export default Viewpost;
