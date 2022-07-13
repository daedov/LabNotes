import React from 'react';
import { UserAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {  
  const {user, loading} = UserAuth();
  if (loading){
    return <p>Loading...</p>
  }
  
  if(!user) {
    return <Navigate to='/' />
  } 
  return <>{children}</>
}

export default ProtectedRoute;