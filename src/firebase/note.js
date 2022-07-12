import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./init";

const getNote = async (id) => {
  try {
    const docRef = doc(db, 'note', id);
    const res = await getDoc(docRef);
    return res.data();
  } catch (error) {
    throw error.message;
  }
}                                                                                                                                                                                                         

const editNote = async (id, title, description) => {
  const docRef = doc(db, 'note', id)
  try{
    await updateDoc(docRef, {
    title,
    description,
  })}
  catch (error){
    throw error.message
  }
};

function deleteNote(id) {
  deleteDoc(doc(db, 'note', id)); 
}

export {deleteNote, editNote, getNote};