// Layout.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ textContent, children }) => {
  return (
    <div>
      <div className="top-bar">
        <img src="/static/images/logo.png" alt="Logo" className="logo-image" />
        <ul className="top-links">
          <li><Link to="/about">{textContent.aboutMe}</Link></li>
          <li><Link to="/contact">{textContent.contact}</Link></li>
        </ul>
        <div className="btn btn-user">
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
            <Link className="btn btn-sidebar" to="/home">
              <span className="material-symbols-outlined">home</span>
              <span className="sidebar-text">{textContent.home}</span>
            </Link>
            {/* Additional sidebar links */}
            {/* ... */}
            <div className="sidebar-footer">
              <p>&copy; {textContent.sidebarFooterSignature}</p>
            </div>
          </div>
          <div className="content">
            {/* Specific page content will go here */}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
