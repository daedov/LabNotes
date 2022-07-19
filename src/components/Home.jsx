import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Home = () => {
  const navigate = useNavigate();
  const { loginGoogle } = UserAuth();
  const handleGoogle = async () => {
    try {
      await loginGoogle();
        navigate('/ShowDashboard');
      console.log('logueo con google');
    } catch (error) {
      console.log(error.message);
      }
    };
  return (
    <div className="w-full max-w-xs m-auto place-items-center flex flex-col" >
      <h1 className="font-mono font-bold text-7xl tracking-wide text-fuchsia-900">LABNOTES</h1>
      <h4 className="font-mono italic">All you need is notes</h4>
      <div className="flex flex-row justify-around mt-4 mx-2">
        <Link to="/Login">
          <button className="font-mono font-bold mx-2 mb-1 px-3 py-2 top-3 right-2 bg-violet-200 hover:bg-violet-300 active:bg-violet-200 focus:outline-none focus:ring focus:ring-violet-300 rounded p-2 mt-2">
            Email Login 
          </button>
        </Link>
        <button  className="font-mono font-bold mx-2 mb-1 px-3 py-2 top-3 right-2 bg-violet-200 hover:bg-violet-300 active:bg-violet-200 focus:outline-none focus:ring focus:ring-violet-300 rounded p-2 mt-2" onClick={handleGoogle}>
          Google Login
        </button>
      </div>
      <Link to="/Register">
        <button className="font-mono font-bold px-3 py-2 top-3 right-2 bg-violet-200 hover:bg-violet-300 active:bg-violet-200 focus:outline-none focus:ring focus:ring-violet-300 rounded p-2 mt-2">
          Create an Account
        </button>
      </Link>
    </div>
  );
};

export default Home;
