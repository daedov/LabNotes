import { collection, addDoc, deleteDoc, updateDoc, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from './init';

const notesCollection = 'note';

export const saveNote = (newNote) => addDoc(collection(db, notesCollection), newNote);

export const getNote = (id) => getDoc(doc(db, notesCollection, id));

export const getNotes = () => getDocs(collection(db, notesCollection));

export const updateNote = (id, updatedItem) => {
  const docRef = doc(db, notesCollection, id);
  updateDoc(docRef, updatedItem);
};

export const deleteNote = (id) => deleteDoc(doc(db, notesCollection, id));
