import React, { useEffect, useState } from "react";
import textContent from '../../textContent';
import RoutineStripe from '../components/RoutineStripe';

const ChooseRoutine = () => {
  console.log("ChooseRoutine page is being rendered!");
  const [routineList, setRoutineList] = useState([]);
  const [exerciseList, setExerciseList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const routineResponse = await fetch('api/routines/');
        const routineData = await routineResponse.json();
        setRoutineList(routineData);

        const exerciseResponse = await fetch('api/exercises/');
        const exerciseData = await exerciseResponse.json();
        setExerciseList(exerciseData);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


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
            <RoutineStripe
            key={index}
            index={index}
            routine={routine}
            exerciseList={exerciseList}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseRoutine;
