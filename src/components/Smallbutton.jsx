import React from "react";
import {useNavigate} from 'react-router-dom';

function Smallbutton(props)
{
  const navigate = useNavigate();
  const navigateTo=()=>{
    navigate("/"+props.goto);
  };
  return(
    <button onClick={navigateTo} type="button" class="btn btn-warning smallbutton">{props.name}</button>
  );
}

export default Smallbutton;
