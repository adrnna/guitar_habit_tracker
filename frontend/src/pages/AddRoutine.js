import React, { useState } from 'react';
import textContent from '../../textContent';
import GuitarRoutineForm from '../components/GuitarRoutineForm';


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
        <p class="overlay-text">{ textContent.newRoutineInstructions }</p>
          <GuitarRoutineForm />
        </div>
      </div>
    </div>
  );
};

export default AddRoutine;
