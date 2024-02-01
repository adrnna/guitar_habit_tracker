import React, {useState} from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import textContent from '../../textContent';
import FilteredExercises from '../components/FilteredExercises';
import CountdownClock from "../components/CountdownClock";
import ControlButtons from '../components/ControlButtons';



const PlayRoutine = () => {

  console.log("PlayRoutine page is being rendered!");

  const navigate = useNavigate();
  const location = useLocation();
  const routine = location.state.selectedRoutine;
  const exerciseList = location.state.exerciseList;  

  // get all the routine info and keep track of current exercise
  const exerciseIds = routine.exercises;
  const filteredExercises = FilteredExercises({exerciseIds, exerciseList});
  console.log(filteredExercises);

  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);

  const handleNextClick = () => {
    // Check if there is a next exercise
    if (currentExerciseIndex < filteredExercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
      setIsPaused(true);
    } else {
      // Navigate to a different page or handle the end of exercises
      navigate('/choose-routine');
    }
  };

  const currentExercise = filteredExercises[currentExerciseIndex];


  // control the state of the timer and pass functions to ControlButtons
  const [isPaused, setIsPaused] = useState(true);

  const onPause = () => {
    setIsPaused(true);
  };

  const onPlay = () => {
      setIsPaused(false);
  };


  return (
    <div className='content-container'>
      <div className="overlay-content">
      <div className="title-text-container">
        <div className="keyword text-box big-text-box">{ textContent.keywordPlayRoutine}</div>
      </div>
      <div id="overlayContainer" className="overlay-container">
        <div className="stripe-container ">
          <div className="stripe-and-collapsible">
            <div className="routine-container play">
              <div className="routine-title">{textContent.routineTitle}{routine.routine_name}</div>
              <div className="overlay-stripe routine play">
                <div className="exercise_name">{currentExercise.exercise_type}: {currentExercise.exercise_name}</div>
                <div className="exercise_description">{currentExercise.description}</div>
                <CountdownClock
                  targetTime={currentExercise.time}
                  isPaused={isPaused}
                />
                {/* Add more components or content specific to the current exercise */}
              </div>
            </div>
          </div>
        </div>
        <ControlButtons
          isPaused={isPaused}
          onPause={onPause} 
          onPlay={onPlay}
        />
        <button className="btn btn-save" onClick={handleNextClick}>{ textContent.nextExerciseBtn}</button>
      </div>
      </div>
    </div>
  );
};

export default PlayRoutine;
