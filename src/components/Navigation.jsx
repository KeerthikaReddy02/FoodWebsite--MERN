import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/Logo.png";

function Navigation()
{
  return(
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="logo-img"/>
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">

              <li className="nav-item">
                <NavLink className="nav-link" to="/newpost">
                  New Post
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/allposts">
                  Posts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Logout
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
