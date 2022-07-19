import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { getNotes, deleteNote } from '../firebase/noteProcess';

const ShowDashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = UserAuth();
  //LOGOUT
  const handleLogout = async () => {
    await logout();
    navigate('/');
    console.log('deslogueo');
  };
  //DELETE NOTE
  const handleDeleteNote = async (id) => {
    try {
      await deleteNote(id);
      setTimeout(() => {
        window.location.href = "/ShowDashboard";
      }, 100);
    } catch (error) {
      throw error.message;
    }
  };
  const [notes, setNotes] = React.useState([]);

  const getNotesList = async () => {
    const querySnapshot = await getNotes();
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setNotes(docs);
  };
  //CALL TO NOTES LIST
  useEffect(() => {
    getNotesList()
  }, []);

  return (
    <div className="w-full m-auto flex flex-col justify-items-stretch">
      <div className="text-center font-bold uppercase p-3 ">
        <h2 className="font-bold text-4xl text-fuchsia-900">Welcome {user.displayName || user.email}</h2>
        <h5 className="font-mono text-purple-900">Today is {new Date().toLocaleDateString()}</h5>
      </div>
      <div className="flex flex-row justify-around p-5 ">
        <button
          className="basis-1/4 font-bold px-2 top-3 right-3 text-purple-900  bg-violet-300 hover:bg-violet-400 active:bg-violet-200 focus:outline-none focus:ring focus:ring-violet-300 rounded p-2 mt-2"
          type="submit"
          onClick={() => navigate('/Add')}
        >
          Add a New Note
        </button>
        <button
          className="basis-1/4 font-bold px-2 top-3 right-3 text-purple-900  bg-violet-300 hover:bg-violet-400 active:bg-violet-200 focus:outline-none focus:ring focus:ring-violet-300 rounded p-2 mt-2"
          type="submit"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      {notes.map((note) => (
        <div
          className="flex flex-wrap gap-4 py-4 px-5 max-w-sm mt-2 mx-auto bg-white rounded shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
          key={note.id}
        >
          <div className="text-center space-y-3 sm:text-left">
            <div className="space-y-0.5">
              <p className="text-lg font-bold text-fuchsia-900">{note.title}</p>
              <p className="text-slate-500 font-medium">{note.description}</p>
            </div>
            <button
              onClick={() => navigate(`/Edit/${note.id}`)}
              className="px-2 py-2 mx-1 mt-4 text-sm text-purple-900 font-semibold rounded-full border border-purple-300 bg-violet-200 hover:text-white hover:bg-violet-300 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            >
              Update Note
            </button>
            <button
              onClick={() => {
                handleDeleteNote(note.id);
              }}
              className="px-2 py-2 mx-1 mt-4 text-sm text-purple-900 bg-violet-200 font-semibold rounded-full border border-purple-300 hover:text-white hover:bg-violet-300 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            >
              Delete Note
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

//<NoteForm />
export default ShowDashboard;
