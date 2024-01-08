import React from "react";
import { useLocation } from 'react-router-dom';
import textContent from '../../textContent';
import SingleRoutineStripe from "../components/SingleRoutineStripe";


const ChosenRoutine = () => {

  console.log("ChooseRoutine page is being rendered!");

  const location = useLocation();
  const selectedRoutine = location.state.selectedRoutine;
  const exerciseList = location.state.exerciseList;


  return (
    <div>
      <div className="title-text-container">
        <div className="keyword text-box">{ textContent.keywordChooseRoutine}</div>
        <div className="text-box">{ textContent.titleAddRoutine }</div>
        <div className="text-box">{ textContent.newRoutineTitle }</div>
      </div>

      <div className="overlay-content">
        <div id="overlayContainer" className="overlay-container active">
          <div className="stripe-container ">
            <div className="stripe-and-collapsible overlay-stripe routine">
              <SingleRoutineStripe 
              routine={selectedRoutine} 
              exerciseList={exerciseList}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChosenRoutine;
