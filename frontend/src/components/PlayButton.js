import React from 'react';
import { useNavigate } from 'react-router-dom';
import textContent from '../../textContent';


const PlayButton = ({ routine, exerciseList }) => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/play-routine/${routine.id}`, { state: { selectedRoutine: routine, exerciseList } });
  };


  return (
    <div className="save-stripe">
      <button type="button" className="btn btn-save" onClick={handleButtonClick}>
        {textContent.playButton}
      </button>
    </div>
  );
};

export default PlayButton;
