import React, {useState} from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import textContent from '../../textContent';
import FilteredExercises from '../components/FilteredExercises';
import CountdownClock from "../components/CountdownClock";


const PlayRoutine = () => {

  console.log("PlayRoutine page is being rendered!");

  const navigate = useNavigate();
  const location = useLocation();
  const routine = location.state.selectedRoutine;
  const exerciseList = location.state.exerciseList;  

  const exerciseIds = routine.exercises;
  const filteredExercises = FilteredExercises({exerciseIds, exerciseList});
  console.log(filteredExercises);

  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);

  const handleNextClick = () => {
    // Check if there is a next exercise
    if (currentExerciseIndex < filteredExercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    } else {
      // Navigate to a different page or handle the end of exercises
      navigate('/choose-routine');
    }
  };

  const currentExercise = filteredExercises[currentExerciseIndex];


  return (
    <div className='content-container'>
      <div className="overlay-content">
      <div className="title-text-container">
        <div className="keyword text-box big-text-box">{ textContent.keywordPlayRoutine}</div>
      </div>
      <div id="overlayContainer" className="overlay-container">
        <div className="stripe-container ">
          <div className="stripe-and-collapsible">
            <div className="routine_title">{textContent.routineTitle}{routine.routine_name}</div>
            <div className="overlay-stripe routine play">
              <div className="exercise_name">{currentExercise.exercise_type}: {currentExercise.exercise_name}</div>
              <CountdownClock
                targetTime={currentExercise.time}
              />
              {/* Add more components or content specific to the current exercise */}
            </div>
          </div>
        </div>
        <button className="btn" onClick={handleNextClick}>{ textContent.nextExerciseBtn}</button>
      </div>
      </div>
    </div>
  );
};

export default PlayRoutine;
