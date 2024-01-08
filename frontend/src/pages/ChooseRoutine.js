import React, { useEffect, useState } from "react";
import textContent from '../../textContent';
import { useNavigate } from 'react-router-dom';
import SingleRoutineStripe from "../components/SingleRoutineStripe";


const ChooseRoutine = () => {

  console.log("ChooseRoutine page is being rendered!");
  const navigate = useNavigate();

  const [routineList, setRoutineList] = useState([]);
  const [exerciseList, setExerciseList] = useState([]);
  const [selectedRoutine, setSelectedRoutine] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const routineResponse = await fetch('api/routines/');
        if (!routineResponse.ok) {
          throw new Error(`Error: ${routineResponse.status}`);
        }
        const routineData = await routineResponse.json();
        setRoutineList(routineData);

        const exerciseResponse = await fetch('api/exercises/');
        if (!exerciseResponse.ok) {
          throw new Error(`Error: ${exerciseResponse.status}`);
        }
        const exerciseData = await exerciseResponse.json();
        setExerciseList(exerciseData);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleRoutineClick  = (routine) => {
    setSelectedRoutine(routine);
    navigate(`/choose-routine/${routine.id}`, { state: { selectedRoutine: routine, exerciseList: exerciseList} });
  };

  return (
    <div>
      <div className="title-text-container">
        <div className="keyword text-box">{ textContent.keywordChooseRoutine}</div>
        <div className="text-box">{ textContent.titleAddRoutine }</div>
        <div className="text-box">{ textContent.newRoutineTitle }</div>
      </div>

      <div className="overlay-content">
        <div id="overlayContainer" className="overlay-container active">
          {routineList.map((routine, index) => (
            <div key={index} className="stripe-container ">
              <div className="stripe-and-collapsible overlay-stripe routine" onClick={() => handleRoutineClick(routine)}>
                <SingleRoutineStripe 
                routine={routine} 
                exerciseList={exerciseList}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseRoutine;
