import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { saveNote, getNote, updateNote } from '../firebase/noteProcess';
// import AlertNote from '../layout/AlertNote'

const NoteForm = () => {
  const { user } = UserAuth();
  const [note, setNote] = useState({
    title: '',
    description: '',
    user: user.uid,
  });

  const params = useParams();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setNote({
      ...note,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!params.id) {
      await saveNote(note);
    } else {
      await updateNote(params.id, note);
    }
    navigate('/ShowDashboard');
  };
  const getNoteById = async (id) => {
    try {
      const note = await getNote(id);
      setNote({ ...note.data() });
    } catch (error) {
      throw error.message;
    }
  };
  useEffect(() => {
    if (params.id) {
      getNoteById(params.id);
    }
  }, [params.id]);

  return (
    <div className="w-full max-w-xs m-auto place-items-center bg-purple-50 rounded p-6 flex flex-col justify-center">
      <form onSubmit={handleSubmit}>
        <h3 className="font-bold text-2xl tracking-wide text-fuchsia-900 mb-4 text-center">
          Your note is...
        </h3>
        <label className="block">
          <span className="block font-bold text-sm text-fuchsia-900">Note Title </span>
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={handleChange}
            className="mt-2 mb-3 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
          />
        </label>
        <label className="block">
          <span className="block font-bold text-sm text-fuchsia-900">Note Description</span>
          <input
            type="text"
            name="description"
            value={note.description}
            onChange={handleChange}
            className="mt-2 mb-3 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
          />
        </label>

        <button
          className="px-3 py-2 mx-1 mt-3 text-sm text-purple-900 bg-violet-200 font-semibold rounded-full border border-purple-300 hover:text-white hover:bg-violet-300 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          type="submit"
        >
          Add Note
        </button>
      </form>
      <div>
        <Link to="/ShowDashboard">
          <p className="font-mono text-center p-2 mt-4 mx-1 text-sm text-purple-600 font-semibold hover:text-purple-400 hover:bg-purple-100 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Go back
          </p>
        </Link>
      </div>
    </div>
  );
};

export default NoteForm;
