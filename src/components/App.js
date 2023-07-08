// import ways to navigate
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';

// import styles + react logo (not needed)
import logo from '../logo.svg';
import '../styles/App.css';

// import the other pages
import LoginPage from './LoginPage';
import BookshelfPage from './BookshelfPage';
import CRUDPage from './CRUDPage';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  const handleLogin = () => {
    setIsLoggedIn(true);
    history.push('/bookshelf');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    history.push('/');
  };

  return (
    <Router>
      <div className="container">
        <Route
          exact
          path="/"
          render={(props) => (
            <LoginPage {...props} handleLogin={handleLogin} isLoggedIn={isLoggedIn} />
          )}
        />
        <Route
          path="/bookshelf"
          render={(props) => (
            <BookshelfPage {...props} handleLogout={handleLogout} isLoggedIn={isLoggedIn} />
          )}
        />
        <Route
          path="/crud"
          render={(props) => (
            <CRUDPage {...props} handleLogout={handleLogout} isLoggedIn={isLoggedIn} />
          )}
        />
      </div>
    </Router>
  );
}

export default App;