import React, { useEffect, useState } from 'react';
import { createContext, useContext } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup
} from 'firebase/auth';
import { auth, provider } from '../firebase/init';

export const userContext = createContext();

export const UserAuth = () => {
  const context = useContext(userContext);
  return context;
};
// eslint-disable-next-line
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // REGISTER USER WITH EMAIL AND PASSWORD
  const register = (email, password) => {
    const res = createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    return user; 

  };
  // SIGN IN WITH EMAIL AND PASSWORD
  const login = (email, password) => {
    const res = signInWithEmailAndPassword(auth, email, password);
    const user = res.user;
    return user;                
  };
  // SIGN OUT
  const logout = () => {
    signOut(auth);
    setUser(null);
  };
  // SIGN IN WITH GOOGLE
  const loginGoogle = () => {
    const res = signInWithPopup(auth, provider);
    const user = res.user;
    return user;
  };

  useEffect(() => {
      const stateUser = onAuthStateChanged(auth, user => {
        if(user){
          setUser(user);
        }
        setLoading(false);
      });
      return stateUser;
  }, []);

  return (
    <userContext.Provider value={{ register, login, user, logout, loading, loginGoogle }}>
      {children}
    </userContext.Provider>
  );
}
