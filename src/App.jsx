import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.js';
import './index.css';
import Home from './views/Home.jsx';
import Login from './views/Login';
import Register from './views/Register';
import ShowDashboard from './views/ShowDashboard';
import SignOut from './views/SignOut';
import NotFound from './layout/NotFound';
import Footer from './layout/Footer';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute.jsx';

const App = () => {
  return (
    <div className="container mx-auto h-screen place-items-center flex">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/ShowDashboard" element={<ProtectedRoute><ShowDashboard /></ProtectedRoute>} />
          <Route path="/SignOut" element={<SignOut />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
      <Footer></Footer>
    </div>
  );
};

export default App;
