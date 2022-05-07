import {useParams} from "react-router-dom"
import React from "react";

const Form = () => {
  let{category,id}=useParams()
  return (
    <div>
      <h1>Form Components-{category}</h1>
      <h1>Form Components-{id}</h1>
      <img
        src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80"
        style={{ height: "500px" }}
      />
    </div>
  );
};

export default Form;




// useLocation