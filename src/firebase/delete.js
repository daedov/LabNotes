//DELETE POST
//TODO: conectar esta función con la vista con react
export const deletePost = async (id) => {
  try {
    await deleteDoc(doc(db, "task", id));
  } catch (error) {
    throw error.message;
  }
};
