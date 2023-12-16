// Layout.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import textContent from '../../textContent';
import { Outlet } from 'react-router-dom';

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
          <div className="sidebar">
            <div className="sidebar-top">
              <span className="material-symbols-outlined">music_note</span>
              <span className="sidebar-text">adrnna</span>
              {/* <span className="sidebar-text">{user.username}</span> */}
            </div>
            <Link className="btn btn-sidebar" to="/">
              <span className="material-symbols-outlined">home</span>
              <span className="sidebar-text">{textContent.home}</span>
            </Link>
            <div id="newSession">
              <button className="btn btn-sidebar rollout-options-button">
                <span className="material-symbols-outlined">piano</span>
                <span className="sidebar-text">{textContent.startNewSession}</span>
              </button>
              <div id="rolloutOptions">
                <Link to="choose-routine" className="btn btn-sidebar rollout-options sidebar-text">{textContent.chooseYourRoutine}</Link>
                <Link to="just-jam" className="btn btn-sidebar rollout-options sidebar-text">{textContent.justJam}</Link>
              </div>
            </div>
            <div id="editRoutine">
              <button className="btn btn-sidebar rollout-options-button">
                <span className="material-symbols-outlined">add</span>
                <span className="sidebar-text">{textContent.editYourRoutines}</span>
              </button>
              <div id="rolloutOptions">
                <Link to="edit-routine" className="btn btn-sidebar rollout-options sidebar-text">{textContent.editYourRoutines}</Link>
                <Link to="add-routine" className="btn btn-sidebar rollout-options sidebar-text">{textContent.composeYourRoutine}</Link>
              </div>
            </div>
            <div id="oldSessionOptions">
              <button className="btn btn-sidebar rollout-options-button">
                <span className="material-symbols-outlined">browse_gallery</span>
                <span className="sidebar-text">{textContent.browseOldSessions}</span>
              </button>
            </div>
            {/* Additional sidebar links */}
            {/* ... */}
            <div className="sidebar-footer">
              <p>&copy; {textContent.sidebarFooterSignature}</p>
            </div>
          </div>
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
