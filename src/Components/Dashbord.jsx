// import React from "react";
import { useNavigate } from "react-router-dom";

const Dashbord = () => {
  let Navigate = useNavigate();
  let data = {
    name: "Rizwan",
  };
  return (
    <div>
      <h1>Dashbord Page</h1>
      <button
        onClick={() => {
          Navigate("/logout", { state: data });
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashbord;
