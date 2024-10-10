import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
   
        const response = await axios({
            method: "POST",
            url: "http://localhost:8080/api/login",
            data: {
              email: email,
              password: password,
            },
            headers: {
              "Content-Type": "application/json", Accept: "application/json",
            },
        });
        if (response.status === 200) {
            console.log("User Loggedin Successfully");
            navigate('/success');
        }
    }
    catch(error){
        console.error('Login Failed.', error);
        setErrorMessage('Invalid email or password');
    }
 };

 const gotToSignUp = () => {
    navigate('/register');
 }

 const gotToHomePage = () => {
  navigate('/');
}

  return (
    <div className="login-container">
      <h1 class= "login-header" onClick={gotToHomePage}>Apply4U</h1>
      <h2 class= "login-header-text">We will take care of your Applications.</h2>
      <form class = "login-form" onSubmit={handleSubmit}>
        <input class = "login-input"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input class = "login-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errorMessage && <p className = "error-message" style={{ color: "red" }}>{errorMessage}</p>}
        <button class = "login-button" type="submit">Log In</button>         
        <a href = "https://www.youtube.com">Forgot Password?</a>
        <button class = "login-button" type="button" onClick={gotToSignUp}>Create New Account</button>
      </form>  

    
    </div>
  );
};

export default Login;
