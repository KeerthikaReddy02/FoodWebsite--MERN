import React from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';

function Smallbutton(props)
{
  const navigate = useNavigate();
  const navigateTo=()=>{
    navigate("/"+props.name);
  };
  return(
    <button onClick={navigateTo} type="button" class="btn btn-warning smallbutton">{props.name}</button>
  );
}

export default Smallbutton;
