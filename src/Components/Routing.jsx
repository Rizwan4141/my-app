import React from "react";
import About from "./About";
import Form from "./Form";
import Home from "./Home";
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import Dashbord from "./Dashbord";
import Logout from "./Login";
const Routing = () => {
  let isLogged=false
  let data= {
    'st':'User not lagged in'
  }
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/form/:category" element={<Form />} />
          <Route path="/form/:category/:id" element={<Form />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/dashbord" element={isLogged ? <Dashbord/> : <Navigate to="/login" replace state={data} />} />

          <Route path="*" element={<h1>Error 404 page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
