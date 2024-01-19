// Layout.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import textContent from '../../textContent';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';


const Layout = () => {
  const [username, setUsername] = useState('');

  // Make an API request to retrieve the current logged-in user's information
  async function fetchUsername() {
    const response = await axios.get('/api/current_user');
    const extractedUsername = response.data.username;
    setUsername(extractedUsername);
  }

  useEffect(() => {
    fetchUsername();
  }, []);

  return (
    <div>
      <div className="top-bar">
        <img src="/static/images/logo.png" alt="Logo" className="logo-image" />
        <ul className="top-links">
          <li><Link to="about">{textContent.aboutMe}</Link></li>
          <li><Link to="contact">{textContent.contact}</Link></li>
        </ul>
        <div className="btn btn-user">
          <h1>Welcome, {username}!</h1>
          {/* {user.is_authenticated ? (
            <>
              <p className="greeting">{`${textContent.greeting} ${user.username}!`}</p>
              <Link to="/logout">{textContent.logout}</Link>
            </>
          ) : (
            <>
              <Link to="/login">{textContent.login}</Link>
              <Link to="/signup">{textContent.signup}</Link>
            </>
          )} */}
        </div>
      </div>
      <div className="background-container">
        <div className="container">
          <div className="toggle-sidebar-button">
            <button className="btn-collapsible">
              <span className="material-symbols-outlined navbar">arrow_right</span>
            </button>
          </div>
          <Sidebar />
          <div className="content">
            {/* Specific page content will go here */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
