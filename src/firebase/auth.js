import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  provider,
  signInWithPopup,
} from './init.js';

// REGISTER USER WITH EMAIL AND PASSWORD
const registerUser = async (auth, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    throw error.message;
  }
};

// SIGN IN WITH EMAIL AND PASSWORD
const signIn = async (auth, email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    throw error.message;
  }
};

// SIGN OUT WITH EMAIL
const signOutWithEmail = async (auth) => {
  try {
    const response = await signOut(auth);
    return response;
  } catch (error) {
    return error.message;
  }
};

const signInWithGoogle = async () => {
  try {
    const response = await signInWithPopup(auth, provider);
    console.log(response);
    return response.user;
  } catch (error) {
    throw error.message;
  }
};

export { auth, signInWithGoogle, registerUser, signOutWithEmail, signIn };
