import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Login from './components/views/Login';
import Register from './components/views/Register';
import Dashboard from './components/views/Dashboard';
import NotFound from './components/layout/NotFound';
import NavMenu from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SignOut from './components/layout/SignOut';

const root = ReactDOM.createRoot(document.getElementById('root'));
//TODO: faltan las rutas con user id y task id
root.render(
  <BrowserRouter>
    <NavMenu></NavMenu>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/SignOut" element={<SignOut />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer></Footer>
  </BrowserRouter>,
);

export default root;
