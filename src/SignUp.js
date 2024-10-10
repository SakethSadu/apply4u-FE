import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "./App.css";

const SignUp = () => {
  const [FirstName, setFName] = useState("");
  const [LastName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
  const navigate = useNavigate(); 

  const validateEmailDomain = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    return passwordRegex.test(password);
  };

  const goToLogin = () => {
    navigate('/login');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    if (!validateEmailDomain(email)) {
        
        setErrorMessage(
            "Invalid email format. Please Enter a valid Email address"
        );
        return;
    }

    if (!validatePassword(password)) {
   
        setErrorMessage(
            "Password must be at least 8 characters long, include Uppercase, Lowercase, numbers, and special characters."
        );
        return;
    }

    try {
      const response = await axios({
        method: "POST",
        url: "http://localhost:8080/api/signup",
        data: {
          firstName: FirstName,
          lastName: LastName,
          email: email,
          password: password,
        },
        headers: {
          "Content-Type": "application/json", Accept: "application/json",
        },
      });
      if (response.status === 200) {
        console.log("User Registered Successfully");
        navigate('/success');
      }
    } catch (error) {
      setErrorMessage("Error occurred during Registration");
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Sign Up. It's Free!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={FirstName}
          onChange={(e) => setFName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={LastName}
          onChange={(e) => setLName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <button type="submit">Register</button>
      </form>
      <div class="signup-login-navigator">
        <p onClick={goToLogin}>Already have an account?</p>
      </div>
    </div>
  );
};

export default SignUp;
