import React from "react";
import {useLocation}from "react-router-dom"

const Home = () => {
  const location=useLocation()
  return (
    <div>
      <h1>Home Components</h1>
      <img src="https://news.maxabout.com/wp-content/uploads/2017/05/12244812_453531751522313_7401891787906334477_o-975x1024.jpg" style={{height:"500px"}}/>
      <button onClick={()=>location("/about")}>Click</button>
    </div>
  );
};

export default Home;
