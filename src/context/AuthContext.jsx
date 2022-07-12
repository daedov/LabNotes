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
  const [initialRender, setInitialRender] = useState(true);   // REGISTER USER WITH EMAIL AND PASSWORD
  const register = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };
  // SIGN IN WITH EMAIL AND PASSWORD
  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };
  // SIGN OUT
  const logout = () => {
    signOut(auth);
  };
  // SIGN IN WITH GOOGLE
  const loginGoogle = () => {
    signInWithPopup(auth, provider);
  };

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
    }
  }, [initialRender, user, loading]);

  return (
    <userContext.Provider value={{ register, login, user, logout, loading, loginGoogle }}>
      {children}
    </userContext.Provider>
  );
}
