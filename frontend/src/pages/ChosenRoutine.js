import React from "react";
import { useLocation } from 'react-router-dom';
import textContent from '../../textContent';
import SingleRoutineStripe from "../components/SingleRoutineStripe";
import PlayButton from "../components/PlayButton";


const ChosenRoutine = () => {

  console.log("ChosenRoutine page is being rendered!");

  const location = useLocation();
  const selectedRoutine = location.state.selectedRoutine;
  const exerciseList = location.state.exerciseList;


  return (
    <div className='content-container'>
      <div className="overlay-content">
        <div className="title-text-container">
          <div className="keyword text-box big-text-box">{ textContent.keywordChooseRoutine}</div>
        </div>
        <div id="overlayContainer" className="overlay-container active">
          <div className="stripe-container ">
            <div className="stripe-and-collapsible">
              <SingleRoutineStripe 
                routine={selectedRoutine} 
                exerciseList={exerciseList}
                chosen={true}
              />
            </div>
          </div>
          <PlayButton routine={selectedRoutine} exerciseList={exerciseList}/>
        </div>
      </div>
    </div>
  );
};

export default ChosenRoutine;
