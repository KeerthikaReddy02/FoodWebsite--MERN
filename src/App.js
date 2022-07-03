import React, {useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Allposts from "./components/Allposts";
import Login from "./components/Login";
import Register from "./components/Register";
import Newpost from "./components/Newpost";
import Viewpost from "./components/Viewpost";

function App()
{
  const [user, setLoginUser] = useState({})
  return(
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/Login" element={<Login setLoginUser={setLoginUser}/>}/>
          <Route path="/Register" element={<Register />}/>
          <Route path="/Newpost" element={<Newpost username={user.Email}/>}/>
          <Route path="/Allposts" element=
          {
            user && user._id?<Allposts/>:<Login setLoginUser={setLoginUser}/>
          }/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
