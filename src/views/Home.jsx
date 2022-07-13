import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';
import { UserAuth } from '../context/AuthContext';

const Home = () => {
  const navigate = useNavigate();
  const { loginGoogle } = UserAuth();
  const handleGoogle = async () => {
    try {
      await loginGoogle();
        navigate('/ShowDashboard');
      console.log('ya se logueo con google');
    } catch (error) {
      console.log(error.message);
      }
    };
  return (
    <div className="w-full max-w-xs m-auto place-items-center flex flex-col" >
      <h1 className={styles.title}>LABNOTES</h1>
      <h4 className={styles.subtitle}>The best place for your notes</h4>
      <h5>Todays date is {new Date().toLocaleDateString()}</h5>
      <div className={styles.btnInline}>
        <Link to="/Login">
          <button  className={styles.btn}>
            Login with Email
          </button>
        </Link>
        <button  className={styles.btn} onClick={handleGoogle}>
          Google Login
        </button>
      </div>
      <Link to="/Register">
        <button className={styles.btn}>
          Create an Account
        </button>
      </Link>
    </div>
  );
};

export default Home;
