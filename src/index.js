import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import Login from "./components/views/login/Login";
import Register from "./components/views/register/Register";
import Dashboard from "./components/views/board/Dashboard";
import NotFound from "./components/views/NotFound";
import NavMenu from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
//TODO: faltan las rutas con user id y task id 
root.render(
  <BrowserRouter>
    <NavMenu></NavMenu>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer></Footer>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
export default root;