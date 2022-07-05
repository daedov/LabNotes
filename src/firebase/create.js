// Add a new document with a generated id.
const createPost = async (title, description) => {
  // console.log("creando post");
  try{
    const docRef = await addDoc(collection(firestore, "Posts"), {
    title: title,
    description: description,
    likes: [  ],
    likesSum: 0,
  })}
  catch (error){
  throw error.message
}
  // console.log("Document written with ID: ", docRef.id);
};

const readData = async  () => {
  try{
    let dataArray = [];
  const querySnapshot = await getDocs(collection(firestore, "Posts"));
  querySnapshot.forEach((doc) => { 
    dataArray.push({ id: doc.id, data: doc.data() });
  });

  console.log('lista', dataArray)
  return dataArray;
  }
  catch (error){
    throw error.message
  }
};


const snapshot = (callback) => {
  const q = query(collection(firestore, "Posts"));
  onSnapshot(q, (callback))
  };