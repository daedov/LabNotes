

// obtener el post que se va a editar
const getPost = async (id) => {
  try {
    const docRef = doc(firestore, 'Posts', id);
    const postResult = await getDoc(docRef);
    return postResult.data();
  } catch (error) {
    throw error.message;
  }

}                                                                                                                                                                                                         


// editar el post que se va a editar
const editPost = async (id, title, description) => {
  const docRef = doc(firestore, 'Posts', id)
  try{
    await updateDoc(docRef, {
    title,
    description,
  })}
  catch (error){
    throw error.message
  }
};

// Update the timestamp field with the value from the server
const time = async (timestamp) => {
  try{
    const updateTimestamp = await updateDoc(docRef, {
    timestamp: serverTimestamp(),
  })}
  catch (error){
    throw error.message
  }
};