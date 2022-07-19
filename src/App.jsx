import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.js';
import './index.css';
import Home from './components/Home.jsx';
import Login from './components/Login';
import Register from './components/Register';
import ShowDashboard from './components/ShowDashboard';
import NotFound from './layout/NotFound';
import Footer from './layout/Footer';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import NoteForm from './components/NoteForm.jsx';

const App = () => {
  return (
    <div className="container mx-auto h-screen place-items-center flex">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/ShowDashboard" element={<ProtectedRoute><ShowDashboard /></ProtectedRoute>} />
          <Route path="/Add" element={<ProtectedRoute><NoteForm /></ProtectedRoute>} />
          <Route path="/Edit/:id" element={<ProtectedRoute><NoteForm /></ProtectedRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
      <Footer></Footer>
    </div>
  );
};

export default App;
