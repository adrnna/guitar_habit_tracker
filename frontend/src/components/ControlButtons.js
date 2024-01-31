import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const ControlButtons = ({ onPause, onPlay }) => {

    return (
        <div className="control-buttons">
            <button onClick={onPause} className="control-button">
                <FontAwesomeIcon icon={faPause} className="control-icon"/>
            </button>
            <button onClick={onPlay} className="control-button">
                <FontAwesomeIcon icon={faPlay} className="control-icon"/>
            </button>
        </div>
    );
};

export default ControlButtons;
