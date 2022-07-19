import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

function NavMenu() {
  const navigate = useNavigate();
  const { logout } = UserAuth();
  //LOGOUT
  const handleLogout = async () => {
    await logout();
    navigate('/');
    console.log('deslogueo');
  };
  return (
    <button
      className="absolute top-7 right-12 text-xl font-bold text-white  bg-violet-800 hover:bg-violet-300 hover:text-violet-900 active:bg-violet-200 focus:outline-none focus:ring focus:ring-violet-300 rounded p-2 mt-2"
      type="submit"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default NavMenu;
