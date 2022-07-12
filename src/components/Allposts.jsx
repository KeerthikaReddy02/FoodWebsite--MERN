import React,{useState, useEffect} from "react";
import Navigation from "./Navigation.jsx";
import Post from "./Post.jsx";
import axios from "axios";


function AllPosts(props)
{
  var info=[]

    const [post,setPost] = useState({
      Cuisine: "All"
    });

    const [data, setData] = useState([]);

    const getData = async () => {
    const { data } = await axios.get("http://localhost:4000/Allposts");
    setData(data);

  };

  useEffect(() => {
    getData();
  }, []);

  const val=data.length;

    const handleChange=event=>{
      const {name,value}=event.target
      setPost({
        [name]:value
      })
    }


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

    <form id="my_form"  action="http://localhost:3000/AllPosts" method="get">
      <select class=""  onChange={handleChange} name="Cuisine">
        <option name="Cuisine" value="All">All</option>
        <option name="Cuisine" value="Indian">Indian</option>
        <option name="Cuisine" value="Chinese">Chinese</option>
        <option name="Cuisine" value="Italian">Italian</option>
        <option name="Cuisine" value="American">American</option>
      </select>
    </form>

    </div>
    </div>
      {
        data[val-1]?.forEach((user)=>{

          user.Posts.forEach((p)=>{
            if (post.Cuisine==="All")
            {
              info.push(<Post title={p.Title} blog={p.Blog} cuisine={p.Cuisine}/>);
            }
            if(p.Cuisine===post.Cuisine){
            console.log("Cuisine matched!");
            info.push(<Post title={p.Title} blog={p.Blog} cuisine={p.Cuisine}/>);
            }
          })
        })
      }



  <div>{info}</div>

    </div>
  );
}
export default AllPosts;
