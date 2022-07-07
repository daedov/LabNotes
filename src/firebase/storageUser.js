import {doc, getDoc} from "./init"

const registeredUser = async (uid) => {
  const docRef = doc(db, "user", uid);
  const response = await getDoc(docRef);
  console.log(response);
  return response.exists();
}

export {registeredUser}