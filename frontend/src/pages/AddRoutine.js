import React from 'react';
import textContent from '../../textContent';
import RoutineForm from '../components/RoutineForm';
import guitar_pic from '../../static/images/guitar_pic.png';


const AddRoutine = () => {
  console.log("AddRoutine page is being rendered!");
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
          <RoutineForm />
        </div>
      </div>
      <img src={guitar_pic} alt="Guitar image" className="guitar-image"/>
    </div>
  );
};

export default AddRoutine;
