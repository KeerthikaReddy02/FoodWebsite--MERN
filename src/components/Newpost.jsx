import React, {useState} from "react";
import Navigation from "./Navigation.jsx";
import {useNavigate} from 'react-router-dom';
import axios from "axios";

function NewPost(props)
{
  const [post,setPost] = useState({
    Title:"",
    Blog:"",
    Cuisine: "Indian",
    Name:props.Email
  });

  const handleChange=event=>{
    const {name,value}=event.target
    setPost({
      ...post,
      [name]:value
    })
  }

const navigate = useNavigate();
  const postContent=()=>{
    const {Title,Blog}=post;
    if(Title && Blog)
    {
      axios.post("http://localhost:4000/Newpost",post)
      .then(response=>alert(response.data.message))
      navigate("/allposts");
    }
    else
    {
      alert("Empty fields present!")
    }
  };

  return(
    <div class="new allposts">
    <Navigation/>
    <br></br><br></br>
    <div class="newpost-body">
    <div class="row">

    <div class="col-lg-4">
    <label for="">Enter title</label>
    <form class="" action="index.html" method="post">
      <input onChange={handleChange} value={post.Title} name="Title" class="title-input" type="text" placeholder="Enter title" required/>
    </form>
    </div>

    <div class="col-lg-4"></div>

    <div class="col-lg-4">
    <label for="">Cuisine</label>
    <form class="" action="index.html" method="post">
      <select onChange={handleChange} name="Cuisine">
        <option value="Indian">Indian</option>
        <option value="Chinese">Chinese</option>
        <option value="Italian">Italian</option>
        <option value="American">American</option>
      </select>
    </form>
    </div>
    </div>

    <br></br><br></br>
    <label for="">Type in Blog</label>
    <br></br>
    <textarea onChange={handleChange} value={post.Blog} name="Blog" rows="20" cols="120"></textarea>

    <br></br><br></br>

  <br></br><br></br>
  <div class="post-button">
  <button onClick={postContent} type="button" class="btn btn-warning smallbutton">Post</button>
  </div>
  </div>
    </div>
  );
}
export default NewPost;
