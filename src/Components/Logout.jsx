import React from "react";
import {useLocation} from "react-router-dom"

const Logout = () => {
    let location =useLocation()
  return (
    <div>
      <h1>Logout lage</h1>
      <h2>{location.state.name} loggout out  !!</h2>
    </div>
  );
};
export default Logout;