import {
  getAuth,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  provider,
  getRedirectResult,
  signInWithRedirect,
  GoogleAuthProvider,
  onAuthStateChanged,
} from './init.js';

// CREATE USER WITH EMAIL
const createUser = async (auth, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    throw error.message;
  }
};

// // SIGN IN WITH EMAIL
// const signIn = async (email, password) => {
//   try {
//     const response = await signInWithEmailAndPassword(auth, email, password);
//     return response;
//   } catch (error) {
//     throw error.message;
//   }
// };

// // SIGN OUT WITH EMAIL
// const signOutWithEmail = async (auth) => {
//   try {
//     const response = await signOut(auth);
//     return response;
//   } catch (error) {
//     return error.message;
//   }
// };

// // REDIRECT GOOGLE ACCESS
// const redirectResult = function () {
//   const auth = getAuth();
//   getRedirectResult(auth)
//     .then((result) => {
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       // The signed-in user info.
//       const user = result.user;
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       // const email = error.customData.email;
//       // The AuthCredential type that was used.
//       const credential = GoogleAuthProvider.credentialFromError(error);
//       // ...
//     });
// };

// const logIn = async function () {
//   signInWithRedirect(auth, provider);
  // export async function logIn(){
  //   try{
  //     const response=await signInWithRedirect(GoogleAuthProvider);
  //     console.log(response)
  //     return response.user;
  //   } catch(error){
  //     console.log(error)
  //       throw error.message;
  //     }
// };

// User is signed in, see docs for a list of available properties
// https://firebase.google.com/docs/reference/js/firebase.User

// obtener el usuario actual con un observador en el objeto auth
// onAuthStateChanged(auth, async (user) => {
//   if (user) {
//     const uid = await (user.uid);
//     console.log('logged user')
//     return savedUser(uid, email)
//   } else {
//     console.log('user logout')
//   }
// });

export { logIn, redirectResult, createUser, onAuthStateChanged, signOutWithEmail, signIn, getAuth };
