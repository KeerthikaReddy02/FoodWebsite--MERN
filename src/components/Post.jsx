import React from "react"
import {useNavigate} from 'react-router-dom';

function Post(props)
{
  const navigate = useNavigate();
  const navigateTo=()=>{
    navigate("/viewpost",{state: {title: props.title, blog: props.blog, cuisine: props.cuisine}});
  };
  return(
    <div class="infoPost">
    <h5>{props.title}</h5>
    <h6>{props.blog.substring(0,100)}...
    <a href="" onClick={navigateTo}>Read more</a>
    </h6>
    <br></br><br></br>
    </div>
  );
}
export default Post;
