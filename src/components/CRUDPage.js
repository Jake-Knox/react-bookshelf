// CRUDPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const CRUDPage = ({ handleLogout }) => {
  return (
    <div className="crud-container">
      <h2>CRUD Page</h2>
      <button onClick={handleLogout}>Logout</button>
      <Link to="/bookshelf">Back to Bookshelf</Link>
    </div>
  );
};

export default CRUDPage;
