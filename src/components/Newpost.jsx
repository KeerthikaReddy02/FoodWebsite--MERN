import React, {useState} from "react";
import Navigation from "./Navigation.jsx";
import uploadimage from "../images/uploadimage.png";
import Smallbutton from "./Smallbutton.jsx";
import {Routes, Route, useNavigate} from 'react-router-dom';
import axios from "axios";

function NewPost(props)
{
  const [post,setPost] = useState({
    Title:"",
    Blog:"",
    Cuisine: "",
    Name:props.username
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
    const {Title,Blog,Cuisine,Name}=post;
    if(Title && Blog)
    {
      axios.post("http://localhost:4000/Newpost",post)
      .then(response=>alert("Successfully posted"))
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
    <label for="">Upload image</label>
    <br></br>
    <div class="image-upload">
  <label for="file-input">
    <img src={uploadimage}/>
  </label>

  <input onClick={handleChange} accept="image/*" id="file-input" name="Image" type="file" />
  </div>

  <br></br><br></br>
  <div class="post-button">
  <button onClick={postContent} type="button" class="btn btn-warning smallbutton">Post</button>
  </div>
  </div>
    </div>
  );
}
export default NewPost;
