// src/pages/NotFound.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/notfound.css';

const NotFound = () => {
  useEffect(() => {
    document.title = '404 - Page Not Found | AIQM';
  }, []);

  return (
    <div className="notfound-page">
      <div className="container">
        <div className="notfound-content">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>The page you are looking for does not exist or has been moved.</p>
          <Link to="/" className="btn btn-primary">Return to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;