import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { AlertError } from '../layout/AlertError';

const Login = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { login } = UserAuth();
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };
  const [error, setError] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(user.email, user.password);
      navigate('/ShowDashboard');
      console.log('logueo');
    } catch (error) {
      console.log('no logueo');
      setError(error.message);
    }
  };
  return (
    <div className="w-full max-w-xs m-auto p-auto ">
      <h3 className="font-bold text-4xl tracking-wide text-fuchsia-900 mb-4 text-center">Login</h3>
      <form
        onSubmit={handleSubmit}
        className="font-mono rounded bg-white shadow-md px-8 pt-6 pb-8 mb-4"
      >
        <div className="block text-sm font-bold mb-2">
          <label className="mx-1 mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            id="email"
            placeholder="email@email.com"
            onChange={handleChange}
          />
        </div>
        <div className="block text-sm font-bold mb-2">
        <label className="mx-1 mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          name="password"
          id="password"
          placeholder="*******"
          onChange={handleChange}
        />
        </div>
        <div>
          <button
            className="inline-block bg-violet-200 font-mono py-2 px-4 text-center mx-1 mt-4 text-sm text-purple-600 font-semi
        bold rounded border border-purple-200 hover:text-white hover:bg-purple-400 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
      {error && <AlertError message={error} />}
      <Link to="/">
        <p className="font-mono text-center p-2 mx-1 text-sm text-purple-600 font-semibold hover:text-purple-400 hover:bg-purple-100 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          Go back
        </p>
      </Link>
    </div>
  );
};

export default Login;
