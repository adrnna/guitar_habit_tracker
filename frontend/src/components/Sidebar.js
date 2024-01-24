import React from 'react';
import { Link } from 'react-router-dom';
import textContent from '../../textContent';
import { useSidebar } from '../components/SidebarContext';


const Sidebar = () => {

    const { isSidebarActive } = useSidebar();

    return (
        <div className={`sidebar ${isSidebarActive ? 'active' : 'inactive'}`}>
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
                <Link to="add-routine" state={{ isSidebarActive }} className="btn btn-sidebar rollout-options sidebar-text">{textContent.composeYourRoutine}</Link>
                </div>
            </div>
            <div id="oldSessionOptions">
                <button className="btn btn-sidebar rollout-options-button">
                <span className="material-symbols-outlined">browse_gallery</span>
                <span className="sidebar-text">{textContent.browseOldSessions}</span>
                </button>
            </div>
            <div className="sidebar-footer">
                <p>&copy; {textContent.sidebarFooterSignature}</p>
            </div>
        </div>
    );
};

export default Sidebar;