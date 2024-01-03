import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import textContent from '../../textContent';
import RoutineForm from '../components/RoutineForm';
import guitar_pic from '../../static/images/guitar_pic.png';


const AddRoutine = () => {
  console.log("AddRoutine page is being rendered!");

  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (success) {
      navigate('/add-routine/success');
    }
  }, [success, navigate]);

  return (
    <div>
      <div className="title-text-container">
        <div className="keyword text-box">{ textContent.keywordAddRoutine}</div>
        <div className="text-box">{ textContent.titleAddRoutine }</div>
        <div className="text-box">{ textContent.newRoutineTitle }</div>
      </div>
      <div className="overlay-content">
        <div id="overlayContainer" className="overlay-container">
          <p className="overlay-text">{ textContent.newRoutineInstructions }</p>
          <RoutineForm
            setSuccess={setSuccess}
          />
        </div>
      </div>
      <img src={guitar_pic} alt="Guitar image" className="guitar-image"/>
    </div>
  );
};

export default AddRoutine;
