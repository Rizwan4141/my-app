import React from "react";
import { ClassComp } from "./ClassComp";
import { Rizwan } from "./Rizwan";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

const Try = () => {
  return (
    <div>
      <h1>Main compnents</h1>
      <BrowserRouter>
        <Link to="/">ClassComp</Link>
        <Link to="/rizwan"> Rizwan</Link>
       
        <Routes>
          <Route path="/" element={<ClassComp />} />
          <Route path="/rizwan" element={<Rizwan/>}/>
        
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Try;
