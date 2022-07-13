import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { Alert } from '../layout/Alert';

const Register = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { register } = UserAuth();
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };
  const [error, setError] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await register(user.email, user.password);
      if (user) {
        navigate('/Login');
      }
      console.log('ya se registro');
    } catch (error) {
      console.log('no se registro');
      setError(error.message);
    }
  };
  return (
    <div className="w-full max-w-xs m-auto">
      <form onSubmit={handleSubmit} className="bg-white shadow-md px-8 pt-6 pb-8 mb-4">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email@email.com"
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="******"
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>
      {error && <Alert message={error} />}
    </div>
  );
};

export default Register;
