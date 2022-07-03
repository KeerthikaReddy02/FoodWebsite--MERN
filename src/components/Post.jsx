import React from "react"

function Post(props)
{
  return(
    <div class="col-lg-4">
    <div>
    <img class="post-img " src={props.image} alt="food-img"/>
    </div>

    <h5>{props.title}</h5>
    <h5>{props.author}</h5>
    </div>
  );
}

export default Post;
