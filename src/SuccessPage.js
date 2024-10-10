import React from 'react';
import { Link } from 'react-router-dom';
import './SuccessPage.css';  // Importing CSS for styling

const SuccessPage = () => {
    return (
        <div className="success-container">
            <h1 className="success-title">Congratulations!</h1>
            <p className="success-message">Registration successful. You can now explore more features!</p>
            <Link to="/" className="home-link">Go back to Home</Link>
        </div>
    );
};

export default SuccessPage;
