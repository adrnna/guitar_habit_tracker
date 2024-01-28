// Layout.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import textContent from '../../textContent';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useSidebar } from './SidebarContext';
import LoadingOverlay from './LoadingOverlay';


const Layout = () => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(true);


  // Make an API request to retrieve the current logged-in user's information
  async function fetchUsername() {
    const response = await axios.get('/api/current_user');
    const extractedUsername = response.data.username;
    setUsername(extractedUsername);
  }

  useEffect(() => {
    fetchUsername();
  }, []);


  const fetchData = async () => {
    // Simulate an asynchronous operation (e.g., API call)
    await new Promise(resolve => setTimeout(resolve, 3000));
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        await fetchData(); 
      } finally {
        // Set loading to false after the data loading completes (whether it succeeds or fails)
        setLoading(false);
      }
    };

    loadData();
  }, []);


  const { isSidebarActive, toggleSidebar } = useSidebar();


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
          <button className="btn-collapsible">
            <span className="material-symbols-outlined navbar" onClick={toggleSidebar}>arrow_right</span>
          </button>
          <Sidebar />
          
            {/* Specific page content will go here */}
            {loading ? (
            <LoadingOverlay />
            ) : (
              <div className="content">
                <Outlet />
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Layout;
