import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';
import SuccessPage from "./SuccessPage";

function App() {

  {/*const [email,setEmail] = useState();
  const [password, setPassword] = useState();

  const getEmail = async (emailId) => {
    try{
      const response = await AudioParam.get("/api/apply4u/v1/email");

    }
  }
    */}
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/success" element={<SuccessPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
