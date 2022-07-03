const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
var fs = require('fs');
//var multer = require('multer');
const path = require('path');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors( ));

mongoose
.connect("mongodb+srv://Keerthika:FoodWebsite@cluster0.7qygxv4.mongodb.net/mytable?retryWrites=true&w=majority")
.then(() => console.log("Connected to db"))
.catch(err => console.log(`Could not Connected to db ${process.env.DB_CONNECTION} `, err));

// var storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now())
//     }
// });

//var upload = multer({ storage: storage });

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
  Password: {
    type: String,
    required: true
  },
  Posts: {
     Title: {
      type: String
    },
    Blog: {
      type: String
    },
    Image:{
      type: String
        }
    ,
    Cuisine: {
      type: String
    }
  }
});

const postScheme = new mongoose.Schema({

})

const User = new mongoose.model("User",userSchema);
const Post = new mongoose.model("Post",postScheme);


app.post("/Login",(request,response)=>{
const {Email,Password}=request.body;
User.findOne({Email: Email},(err,user)=>{
  if(user){
    if(Password==user.Password)
    {
      response.send({message:"Login Successful",user:user});
    }
    else
    {
      response.send({message:"Password did not match"});
    }
  }
  else
  {
    response.send({message:"User not registered"});
  }
})
})

app.post("/Register",(request,response)=>{
const {Name, Email, Password}=request.body;
User.findOne({Email: Email},(err,user)=>{
  if(user){
    response.send({message:"User already registered"})
  }
  else{
    const user = new User({
      Name: Name,
      Email: Email,
      Password: Password
    })
    user.save(err=>{
      if(err){
        response.send(err);
      }
      else{
        response.send({message:"Successfully registered, Please login now"})
      }
    });
  }
})
})

app.get("/NewPost",(request,response)=>{
  console.log(request.User);
})

app.post("/Newpost", (request,response)=>{
  const {Title,Blog,Cuisine,Name}=request.body;
  User.findOne({Email:Name},(err,user)=>{
    if(user)
    {
      user.Posts.Title=Title;
      user.Posts.Blog=Blog;
      user.Posts.Cuisine=Cuisine;

      user.save(err=>{
        if(err){
          response.send(err);
        }
        else{
          response.send({message:"Successfully posted"})
        }
      });

    }
  })
})


app.listen(4000,()=>console.log("Server is running"));
