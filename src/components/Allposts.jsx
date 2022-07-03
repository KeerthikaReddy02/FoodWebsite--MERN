import React from "react";
import Smallbutton from "./Smallbutton.jsx";
import Navigation from "./Navigation.jsx";
import Post from "./Post.jsx";
import img from "../images/pasta.jpg"

function AllPosts()
{
  return(
    <div class="allposts">
    <Navigation/>
    <div class="row">

    <div class="left-div col-lg-4">
    <h1>Food</h1>
    </div>

    <div class="left-div col-lg-4">
    <h1> Blogs</h1>
    </div>

    <div class="right-div col-lg-4">
    <label for="">Cuisine</label>
    <form class="" action="index.html" method="post">
      <select class="" name="">
        <option value="">Indian</option>
        <option value="">Chinese</option>
        <option value="">Italian</option>
        <option value="">American</option>
      </select>
    </form>
    </div>

    </div>
    <Post
    image={img}
    title={"Pasta"}
    />


    </div>
  );
}
export default AllPosts;
