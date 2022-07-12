import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.js';
import './index.css';
import Home from './components/views/Home.jsx';
import Login from './components/views/Login';
import Register from './components/views/Register';
import ShowDashboard from './components/views/ShowDashboard';
import SignOut from './components/views/SignOut';
import NotFound from './components/layout/NotFound';
import Footer from './components/layout/Footer';
import { AuthProvider } from './context/AuthContext';
import AuthRoute from './components/AuthRoute.jsx';

const App = () => {
  return (
    <div className="container mx-auto h-screen place-items-center flex">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/ShowDashboard" element={<AuthRoute><ShowDashboard /></AuthRoute>} />
          <Route path="/SignOut" element={<SignOut />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
      <Footer></Footer>
    </div>
  );
};

export default App;
