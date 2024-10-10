import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'
const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to Apply4U!</h1>
      <p>Click below to Sign Up or Login:</p>
      <Link to="./register">
        <button className='btn'>Sign Up</button>
        <br/>
      </Link>
      <Link to="./login">
        <button className='btn'>Log In</button> {/* You can add the Login route later */}
      </Link>
    </div>
  );
};

export default Home;
