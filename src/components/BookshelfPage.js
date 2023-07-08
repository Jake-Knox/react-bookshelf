// BookshelfPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const BookshelfPage = ({ handleLogout }) => {
  return (
    <div className="bookshelf-container">
      <h2>Welcome to the Bookshelf</h2>
      <button onClick={handleLogout}>Logout</button>
      <Link to="/crud">CRUD Page</Link>
    </div>
  );
};

export default BookshelfPage;
