import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      {/* <ul>
        <li><NavLink to="/">Home </NavLink></li>
        <li><NavLink to="/about">About </NavLink></li>
        <li><NavLink to="/form"> Form</NavLink></li>
      </ul> */}
      <ul>
          <li> <NavLink to="/" style={({isActive})=>{return{color:isActive?"red" : ""}}}>Home</NavLink></li>
          <li><NavLink to="/about"  style={({isActive})=>{return{color:isActive?"red" : ""}}}>About </NavLink></li>
        <li><NavLink to="/form/mobile"  style={({isActive})=>{return{color:isActive?"red" : ""}}}> Form</NavLink></li>
        <li><NavLink to="/form/mobile/id"  style={({isActive})=>{return{color:isActive?"red" : ""}}}> Form wih Id</NavLink></li>
      </ul>
    </div>
  );
};

export default NavBar;
